import React from 'react';
import "../../tailwind.css";
import { NavLink } from "react-router-dom";


    class  textes_recommandes2 extends React.Component {
 
      

        render() {
          
              return(
		
    <div class="container">
          <div class=" flex  justify-center ">
                
                <div class="mt-6 justify-center flex  ">
                
                 <div  class="  flex relative w-12 h-12  justify-center items-center  rounded-full titre_bulle">Note </div>
                 <p class="relative   ml-2 date2 text-gray-500"  > 
                 <h2  class="titre_texte2" > Loi des finances 2021  </h2> 31/12/2020</p>
                
                 <button class=" ml-12 px-2 py-1  text-center mt-8   shadow buttons_rectangle ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">fr</button>
                 <button class=" ml-2 px-2 py-1 mt-8   text-center buttons_rectangle transition  rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">ar</button> 
                 
                  <div class="ml-2 mt-10 pretty p-icon p-toggle p-plain">
                      <input type="checkbox" />
                      <div class="state p-off ">
                          <i class=" fa fa-bookmark-o fa-lg"></i>
                      </div>
                      <div class="state p-on p-info-o">
                          <i class=" fa_custom2 fa fa-bookmark fa-lg "></i>
                      </div>
                  </div>
                  <div class=" mt-10 pretty p-icon p-toggle p-plain">
                      <input type="checkbox" />
                      <div class="state p-off">
                          <i class=" fa fa-heart-o fa-lg"></i>   
                      </div>
                      <div class="state p-on p-info-o">
                          <i class=" fa_custom fa fa-lg fa-heart"></i> 
                      </div>
                  </div>
                  <NavLink class="mt-8 inline-block px-2 py-1  text-center    shadow buttons_rectangle ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" to="/textes_similaires" onClick={this.props.closeLire} >Lire</NavLink>
                  <i class=" ml-2 mt-10  fa fa-chevron-right fa-lg"></i>

                
                </div>  
          </div>         
    </div>
    )
}
    }

export default textes_recommandes2 ;
