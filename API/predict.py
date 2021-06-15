from flask import Flask, render_template, request, jsonify , redirect , url_for
from flask_restful import Api , Resource
from markupsafe import escape
import tensorflow as tf
import pandas 
from tensorflow.keras.models import load_model
from tensorflow import keras



app = Flask(__name__)


# Load your own trained model
def load_keras_model():
    """Load in the pre-trained model"""
    global model
    #model = keras.Model()
    #model.built = True
    #model.load_weights(filepath="models/model_DL")
    model=keras.models.load_model("models/model1")
    #model = pickle.load(open('models/model_DL.h5', 'rb'))
    # Required for model to work
    global graph
    graph = tf.compat.v1.get_default_graph()
   

print("Loading Model ...")
load_keras_model()
print("Loaded ...")



def model_predict(user_id , model):
    preds = model.predict(user_id)
    return preds


# define a predict function as an endpoint 
@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
     user_id = request.form['user_id']
     preds = model_predict(user_id, model)
    return preds

    
   