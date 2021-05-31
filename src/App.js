import './App.css';
/*import Login from './components/Login';*/
import React from 'react';
import navigation  from "./components/Navigation";
import anad from './pages/ANAD/anad.js'
import text_recomnd from './pages/RecText/page_textes_recommandes'
import key_recomnd from './pages/Keyword/page_keywords_recommandes';
import dash from './pages/Dashboard/dashboard'
import settings from './pages/Parametres/parametres';
import texts_sim from './pages/RecText/textes_sim' ;
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';

class App extends React.Component {
  constructor(props){  
		super(props);  
    this.state = { showLogin: true
    }; 
		}  
		  toggleLogin() {  
		this.setState({  
       showLogin: !this.state.showLogin,  
		});  
     } 
    
   render () {
     
  
  return (
    <div >
      
      <BrowserRouter >     
    {/* 
      {this.state.showLogin  ?       
                 <Login closeLogin={this.toggleLogin.bind(this)} /> : null  } */}
           <Navigation/>        

         <Switch  >
              <Route exact path="/menu_principal" component={navigation}/>    
              <Route exact path="/vue_d'ensemble" component={anad}/>  
              <Route exact path="/recommandation_textes" component={text_recomnd}/> 
              <Route exact path="/textes_similaires"  component={texts_sim} />
              <Route exact path="/recommandation_mots_clés" component={key_recomnd}/>  
              <Route exact path ="/tableau_de_bord" component = {dash} /> 
              <Route exact path ="/paramètres" component = {settings} />           
            </Switch>
            </BrowserRouter>
    </div>
  );
  }
}

export default App;
