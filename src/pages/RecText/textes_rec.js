import React from 'react';
import "../../tailwind.css";
import { NavLink } from "react-router-dom";

/*const textes_recommandes = ({ statName, value }) => {
    let color="";
  
    if ((value) === "Rapp." || "Com." ) {
      color = "blue";
    } else if ((value) === "Proj." || "Décr." ) {
      color = "green";
    } else if ((value) === "Note" || "Arr." || "Avis" )  {
      color = "orange";
    } */
    /*let color="";
    let value="";
    switch (value) {
           case ( (value) === "Rapp." || "Com." ):
                color = "blue";
               break;  
            case ((value) === "Proj." || "Décr." ):
                color = "green";
                break;
            case ((value) === "Note" || "Arr." || "Avis" ) :
                color = "orange";
                break;
            default:
                color = ""; 
    } */

    class  textes_recommandes extends React.Component {
 
        render() {
          
              return(
		
    <div class=" Rectangle overflow-hidden">
          <div class="flex  justify-center ">
          
                <div class="flex stat  mr-2  inline-blockleft  left">
                      <div  class=" inline-block flex relative w-14 h-14  justify-center items-center m-1 mr-2  rounded-full titre_bulle">Note </div> 

                      <h2  class="ml-1 titre_texte" > Loi des finances 2021  </h2> 
                      
                      <p class="absolute mt-9 date text-gray-500"  > 31/12/2020</p>
                </div>
                <div class="mt-3  flex right inline-blockright  preferences ">
                 <button class="inline-block px-2 py-1  text-center mt-4   shadow buttons_rectangle ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">fr</button>
                 <button class="inline-block ml-4 px-2 py-1 mt-4   text-center buttons_rectangle transition  rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">ar</button> 
                 
                  <div class="ml-4 mt-6 pretty p-icon p-toggle p-plain">
                      <input type="checkbox" />
                      <div class="state p-off ">
                          <i class=" fa fa-bookmark-o fa-lg"></i>
                      </div>
                      <div class="state p-on p-info-o">
                          <i class=" fa_custom2 fa fa-bookmark fa-lg "></i>
                      </div>
                  </div>
                  <div class="ml-2 mt-6 pretty p-icon p-toggle p-plain">
                      <input type="checkbox" />
                      <div class="state p-off">
                          <i class=" fa fa-heart-o fa-lg"></i>   
                      </div>
                      <div class="state p-on p-info-o">
                          <i class=" fa_custom fa fa-lg fa-heart"></i> 
                      </div>
                  </div>
                  <NavLink class="mt-4 inline-block px-2 py-1  text-center    shadow buttons_rectangle ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" to="/textes_similaires" onClick={this.props.closeLire} >Lire</NavLink>
                  <i class=" ml-3 mt-6 fa fa-chevron-right fa-lg"></i>

                </div>  
          </div>         
    </div>
    )
}
    }

export default textes_recommandes ;
