import React from 'react';
import "../tailwind.css"
import logo_ld from "../assets/images/logo_ld.png" ;
import pwd from '../assets/images/pwd.svg';
import { NavLink } from "react-router-dom";


class Login extends React.Component {
    
    render() {
    return (
        
            <div className="div_central" >
                <img className="ld_image" src={logo_ld} alt="LEGAL DOCTRINE" />
                <div class="shadow-xl p-10 bg-white max-w-xl rounded">
  
                    <div class="mb-4 relative ">
                        <input class="input border border-gray-400 appearance-none rounded w-full  focus  focus:outline-none active:outline-none " id="email" type="text" autofocus/>
                        <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Adresse e-mail</label>
                    </div>
                    <br/>
                    <div class="mb-4 relative">
                        <input class="input border border-gray-400 appearance-none rounded w-full px-5 py-8 pt-5 pb-2 focus  focus:outline-none active:outline-none " id="password" type="password" autofocus />    
                        <label  for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Mot de passe</label>
                        <img className="pwd" src= {pwd} alt='Mot de passe'  />
                    </div>
                   {/* <button class="bg-green-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded button" onClick={this.props.closeLogin}>Connexion</button> */}
                   
                    <NavLink class="bg-green-800 hover:bg-blue-dark text-white font-bold py-3 px-52 rounded button"  to="/menu_principal" onClick={this.props.closeLogin}>Connexion </NavLink>
                    
  </div>
                  
                   </div>
                
                
          
            
         
            
    );
}
}

export default Login;

