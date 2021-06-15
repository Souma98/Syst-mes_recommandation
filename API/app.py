from flask import Flask, render_template, request, jsonify , redirect , url_for
import tensorflow as tf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from bson.objectid import ObjectId
from pymongo import MongoClient
from tensorflow import keras
from tensorflow.keras import layers ,callbacks


app = Flask(__name__)


client = MongoClient('mongodb+srv://recommendation-yradx:vOghBXFE9ReZo40k@develop.r2hgr.mongodb.net/recommendation?authSource=admin&replicaSet=atlas-siynys-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')

db=client.recommendation

"""**DATA 01 : BOOKMARKS**"""

res1 = db.op_bookmarks.find()
dat1 = pd.DataFrame(list(res1))
dat1.rename(columns = {'_id' : 'id_bookmark'} , inplace=True)
dat1.rename(columns = {'user' : 'id_user'} , inplace=True)
dat1.rename(columns = {'text' : 'id_text'} , inplace=True)
dat1=dat1.drop(['id_bookmark','updatedAt','createdAt','__v'], axis=1)

if not (dat1.id_text.empty):
  dat1.insert(2, "Event1", "Bookmark", allow_duplicates=True)
else : 
  dat1['Event1'] == "NaN" 


dat1=dat1.drop_duplicates()


"""**DATA 02: READS**"""

res2 = db.rc_reads.find()
dat2 = pd.DataFrame(list(res2))
dat2.rename(columns = {'_id' : 'id_read'} , inplace=True)
dat2.rename(columns = {'user' : 'id_user'} , inplace=True)
dat2.rename(columns = {'text' : 'id_text'} , inplace=True)
dat2=dat2.drop(['id_read','email','updatedAt','createdAt','__v' ,'firstName', 'lastName'], axis=1)

dat2['roles'] = [str(a) for a in dat2['roles']]
dat2['roles']=dat2['roles'].str.strip('[' ']')
dat2['roles']=dat2['roles'].str.strip( "' ")
dat2['roles']=dat2['roles'].str.replace( "', '" ,"," )


if not (dat2.id_text.empty):
  dat2.insert(2, "Event2", "Read", allow_duplicates=True)
else : 
  dat2['Event2'] == "NaN"


indexNames=dat2[dat2["roles"].str.contains("activeClient|activeProspect") == False].index
dat2 =dat2.drop(indexNames, axis=0)
dat2=dat2.drop_duplicates()


"""**DATA 03 : COPIES**"""

res3 = db.rc_copies.find()
dat3 = pd.DataFrame(list(res3))
dat3.rename(columns=  {'text': 'id_text'},inplace=True)
dat3.rename(columns=  {'user': 'id_user'},inplace=True)
dat3=dat3.drop(['_id' ,'agent', 'host',"content",'createdAt','updatedAt', '__v']  , axis = 1)

if not (dat3.id_text.empty):
  dat3.insert(2, "Event3", "Copy", allow_duplicates=True)
else : 
  dat3['Event3'] == "NaN"

dat3=dat3.drop_duplicates()


"""**Jointure des 03 datas**"""

df1= pd.merge(dat2, dat1, on=["id_user","id_text"] ,how='left')
df2 =pd.merge(df1, dat3, on=["id_user","id_text"],how='outer')
df2 = df2[['id_user','id_text','title','Event1','Event2','Event3']]
df2=df2.drop_duplicates()

"""**ATTRIBUTION DES POIDS A CHAQUE EVENT**"""

event_type_strength = {
   'NaN' : 0.0 ,
   'Read': 1.0,
   'Copy': 2.0,
   'Bookmark': 3.0,
   'Like' : 4.0
}

df2['Event1'] = df2['Event1'].fillna("NaN")
df2['Event2'] = df2['Event2'].fillna("NaN")
df2['Event3'] = df2['Event3'].fillna("NaN")

df2['Event1'] = df2['Event1'].apply(lambda x: event_type_strength[x])
df2['Event2'] = df2['Event2'].apply(lambda x: event_type_strength[x])
df2['Event3'] = df2['Event3'].apply(lambda x: event_type_strength[x])
df2.insert(6, "rating", 0.0, allow_duplicates=False)
df2['rating'] = df2.sum(axis=1)


col_list = ['id_user','id_text','title','rating']
df2 = df2[col_list]
df2 =df2.drop_duplicates()




"""**Méthode 01 : Neural Networks**"""

data0=df2

user_ids = data0["id_user"].unique().tolist()
user2user_encoded = {x: i for i, x in enumerate(user_ids)}
userencoded2user = {i: x for i, x in enumerate(user_ids)}
text_ids = data0["id_text"].unique().tolist()
text2text_encoded = {x: i for i, x in enumerate(text_ids)}
text_encoded2text = {i: x for i, x in enumerate(text_ids)}
data0["user"] = data0["id_user"].map(user2user_encoded)
data0["text"] = data0["id_text"].map(text2text_encoded)

num_users = len(user2user_encoded)
num_texts = len(text_encoded2text)
data0["rating"] = data0["rating"].values.astype(np.float32)
# min and max ratings will be used to normalize the ratings later
min_rating = min(data0["rating"])
max_rating = max(data0["rating"])

print(
    "Number of users: {}, Number of Texts: {}, Min rating: {}, Max rating: {}".format(
        num_users, num_texts, min_rating, max_rating
    )
)

data0 = data0.sample(frac=1, random_state=42)
x = data0[["user", "text"]].values
# Normalize the targets between 0 and 1. Makes it easy to train.
y = data0["rating"].apply(lambda x: (x - min_rating) / (max_rating - min_rating)).values
# Assuming training on 90% of the data and validating on 10%.
train_indices = int(0.9 * data0.shape[0])
x_train, x_val, y_train, y_val = (
    x[:train_indices],
    x[train_indices:],
    y[:train_indices],
    y[train_indices:],
)

EMBEDDING_SIZE = 100

class RecommenderNet(keras.Model):
    def __init__(self, num_users, num_texts, embedding_size, **kwargs):
        super(RecommenderNet, self).__init__(**kwargs)
        self.num_users = num_users
        self.num_texts = num_texts
        self.embedding_size = embedding_size
        self.user_embedding = layers.Embedding(
            num_users,
            embedding_size,
            embeddings_initializer="he_normal",
            embeddings_regularizer=keras.regularizers.l2(1e-6),
        )
        self.user_bias = layers.Embedding(num_users, 1)
        self.text_embedding = layers.Embedding(
            num_texts,
            embedding_size,
            embeddings_initializer="he_normal",
            embeddings_regularizer=keras.regularizers.l2(1e-6),
        )
        self.text_bias = layers.Embedding(num_texts, 1)

    def call(self, inputs):
        user_vector = self.user_embedding(inputs[:, 0])
        user_bias = self.user_bias(inputs[:, 0])
        text_vector = self.text_embedding(inputs[:, 1])
        text_bias = self.text_bias(inputs[:, 1])
        dot_user_text = tf.tensordot(user_vector, text_vector, 2)
        # Add all the components (including bias)
        x = dot_user_text + user_bias + text_bias
        # The sigmoid activation forces the rating to between 0 and 1
        return tf.nn.sigmoid(x)
        


model1 = RecommenderNet(num_users, num_texts, EMBEDDING_SIZE)

earlystopping = callbacks.EarlyStopping(monitor ="val_loss", mode ="min", patience = 5 ,restore_best_weights = False)

opt = tf.keras.optimizers.Adam(learning_rate=0.01 )
model1.compile(
    optimizer=opt,
    loss='binary_crossentropy',
    metrics=['accuracy','mean_squared_error'] 
)

history = model1.fit(
      x=x_train,
      y=y_train,
      batch_size=64,
      epochs=10,
      verbose=1,
      validation_split=0.2,
      validation_data=(x_val, y_val),
      callbacks =[earlystopping]
  )

model1.summary()

#tf.keras.utils.plot_model(model1, to_file='model1.png')
"""
# Plot the loss function
fig, ax = plt.subplots(1, 1, figsize=(10,6))
ax.plot(np.sqrt(history.history['loss']), 'r', label='train')
ax.plot(np.sqrt(history.history['val_loss']), 'b' ,label='val')
ax.set_xlabel(r'Epoch', fontsize=20)
ax.set_ylabel(r'Loss', fontsize=20)
ax.legend()
ax.tick_params(labelsize=20)

# Plot the mean_squared_error
fig, ax = plt.subplots(1, 1, figsize=(10,6))
ax.plot(np.sqrt(history.history['mean_squared_error']), 'r', label='train')
ax.plot(np.sqrt(history.history['val_mean_squared_error']), 'b' ,label='val')
ax.set_xlabel(r'Epoch', fontsize=20)
ax.set_ylabel(r'MeanSquaredError', fontsize=20)
ax.legend()
ax.tick_params(labelsize=20)

# Plot the accuracy
fig, ax = plt.subplots(1, 1, figsize=(10,6))
ax.plot(np.sqrt(history.history['accuracy']), 'r', label='train')
ax.plot(np.sqrt(history.history['val_accuracy']), 'b' ,label='val')
ax.set_xlabel(r'Epoch', fontsize=20)
ax.set_ylabel(r'Accuracy', fontsize=20)
ax.legend()
ax.tick_params(labelsize=20)

plt.plot(history.history["loss"])
plt.plot(history.history["val_loss"])
plt.title("model loss")
plt.ylabel("loss")
plt.xlabel("epoch")
plt.legend(["train", "test"], loc="upper left")
plt.show()
"""
# Let us get a user and see the top recommendations.

def recommended_texts(user_id) :
  user_id = ObjectId(user_id)
  #user_id = df2.id_user.sample(1).iloc[0]
  # Let us get a user and see the top recommendations.
  #user_id = df2.id_user.sample(1).iloc[0]
  
  texts_watched_by_user = data0[data0.id_user == user_id]
  texts_not_watched = data0[
        ~data0["id_text"].isin(texts_watched_by_user.id_text.values)
    ]["id_text"]
  texts_not_watched = list(
        set(texts_not_watched).intersection(set(text2text_encoded.keys()))
    )
  texts_not_watched = [[text2text_encoded.get(x)] for x in texts_not_watched]
  user_encoder = user2user_encoded.get(user_id)
  user_text_array = np.hstack(
        ([[user_encoder]] * len(texts_not_watched), texts_not_watched )
    )
  user_text_array1 = tf.convert_to_tensor(user_text_array, np.float32)
  ratings = model1.predict(user_text_array1).flatten()
  top_ratings_indices = ratings.argsort()[-5:][::-1]
  recommended_text_ids = [
        text_encoded2text.get(texts_not_watched[x][0]) for x in top_ratings_indices
    ]
  new_list = []
  top_texts_user = (
        texts_watched_by_user.sort_values(by="rating", ascending=False)
        .head(5)
        .title
        #.id_text.values
    )
  movie_df_rows = data0[data0["title"].isin(top_texts_user)]
  #for row in top_texts_user :#.itertuples():
   #print(row)

  recommended_texts = data0[data0["id_text"].isin(recommended_text_ids)]
  recommended_texts=recommended_texts.drop_duplicates('title')
  
  codes = []
  for row in recommended_texts.iterrows():
     codes.append(row[1].title)
     
  return codes



#tf.keras.models.save_model(model1 ,"models/model_x")
#Save the Modle to file in the current working directory
#model1.save_weights('models/saved_model', save_format="tf")
print("*************FIN**************")


@app.route('/', methods = ['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/showRec',methods=['POST', 'GET'])
def showRec():
    if request.method == 'POST':  
        user_id = request.form.get('user_id')
        recommandations=recommended_texts(user_id)
        
    return render_template('index.html', user_id=user_id, recommandations=recommandations , titre="L'identifiant de cet utilisateur est :" )
        
@app.route('/getRecommandation')
def getRecommandation():
	return render_template('getRecommandation.html')


@app.route('/about')
def about():
    return 'The about page'


if __name__ == '__main__':
   app.run(port = 5000, debug = True)
   print(("* Loading Keras model and Flask starting server..."
           "please wait until server has fully started"))
   #load_keras_model()


    