import React from 'react';
import "../../tailwind.css";
import Navigation from "../../components/Navigation.js";
import PieChart1 from './Pie_chart1'
import PieChart2 from './Pie_chart2'
import Txts_consultes from './textes_consultes_anad';


class ANAD extends React.Component {



  render() {
		

		return(

    <div>
          <Navigation/>
          <div class="  div_principal_anad ">
                 <div class="flex  mt-3">
                            <div class="w-full px-6 sm:w-1/2  xl:w-1/3">
                                <div class="flex items-center white_cart shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full mt-2 ml-2  bg-opacity-75" id="white_cart1">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="white" >
                                                  <path  d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"></path>
                                                  <path  d="M5.112,7.3c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808c0-0.447-0.363-0.808-0.808-0.808H5.92C5.475,6.492,5.112,6.853,5.112,7.3z"></path>
                                                  <path  d="M5.92,5.331h4.342c0.445,0,0.808-0.361,0.808-0.808c0-0.446-0.363-0.808-0.808-0.808H5.92c-0.444,0-0.808,0.361-0.808,0.808C5.112,4.97,5.475,5.331,5.92,5.331z"></path>
                                                  <path  d="M13.997,9.218H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,9.58,14.442,9.218,13.997,9.218z"></path>
                                                  <path d="M13.997,11.944H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,12.306,14.442,11.944,13.997,11.944z"></path>
                                                  <path  d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z"></path>
                                         </svg>    
                                    </div>
    
                                    <div class="mx-3 mt-2">
                                        <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                                        <h2 class="text-gray-500">Textes consultés</h2>
                                    </div>
                                </div>
                            </div>
    
                            <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                <div class="flex items-center  white_cart shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full mt-2 ml-1 bg-opacity-75" id="white_cart2">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 20 20">
                                          <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z" stroke="white" stroke-width="1"></path>
                                        </svg>            
                                    </div>
    
                                    <div class="mx-3 mt-2">
                                        <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
                                        <h2 class="text-gray-500">Textes en favoris</h2>
                                    </div>
                                </div>
                            </div>
    
                            <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                <div class=" flex items-center white_cart px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full mt-2 bg-opacity-75" id="white_cart3">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 20 20" stroke="currentColor" stroke-width="1">
                                          <path fill="none" d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"></path>
                                        </svg>
                                    </div>
    
                                    <div class="mx-3 mt-2">
                                        <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
                                        <h2 class="text-gray-500">Recherches effectuées</h2>
                                    </div>
                                </div>
                            </div>
                  </div>
                 
                 <div class="pie_chart1 " >
                    <PieChart1 />
                 </div>
                
                 <div class="pie_chart2 " >
                    <PieChart2 />
                 </div>
                 
                 <div class="texts_consultes   ">
                        <div class="flex mb-8 ">
                            <svg class="h-8 w-8 mt-4 ml-2" viewBox="0 0 20 20" fill="gray"  >
                                                  <path  d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"></path>
                                                  <path  d="M5.112,7.3c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808c0-0.447-0.363-0.808-0.808-0.808H5.92C5.475,6.492,5.112,6.853,5.112,7.3z"></path>
                                                  <path  d="M5.92,5.331h4.342c0.445,0,0.808-0.361,0.808-0.808c0-0.446-0.363-0.808-0.808-0.808H5.92c-0.444,0-0.808,0.361-0.808,0.808C5.112,4.97,5.475,5.331,5.92,5.331z"></path>
                                                  <path  d="M13.997,9.218H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,9.58,14.442,9.218,13.997,9.218z"></path>
                                                  <path d="M13.997,11.944H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,12.306,14.442,11.944,13.997,11.944z"></path>
                                                  <path  d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z"></path>
                            </svg> 
                            <h2 class="title_pie">Les textes les plus consultés</h2>
                        </div>
                       <div className="inline  ">
                        <Txts_consultes/>
                        <Txts_consultes/>
                        <Txts_consultes/>
                        <Txts_consultes/>
                       </div>
                       
                        
                 </div>
                 
                 <div class=" flex keywords_anad">
                        <div class="flex  mb-6 ">
                            <svg  class="h-8 w-8 mt-5 ml-3 " fill="gray"  stroke-width="2"  viewBox="0 0 512 512"> <circle cx="12" cy="12" r="4"/><circle cx="24" cy="24" r="4"/><circle cx="30" cy="24" r="4"/><path d="m392 336v-40h-16v40a8.009 8.009 0 0 1 -8 8h-96v16h96a24.028 24.028 0 0 0 24-24z"/><path d="m40 360h48v-16h-48a8.009 8.009 0 0 1 -8-8v-296a8.009 8.009 0 0 1 8-8h328a8.009 8.009 0 0 1 8 8v96h16v-96a24.027 24.027 0 0 0 -24-24h-328a24.027 24.027 0 0 0 -24 24v296a24.027 24.027 0 0 0 24 24z"/><path d="m56 144h72a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8-8h-72a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8zm8-48h56v32h-56z"/><path d="m152 88h24v16h-24z"/><path d="m192 88h96v16h-96z"/><path d="m304 88h16v16h-16z"/><path d="m152 120h64v16h-64z"/><path d="m232 120h16v16h-16z"/><path d="m52.284 496a36.047 36.047 0 0 0 25.657-10.627l71.716-71.716a8 8 0 0 0 0-11.314l-2.344-2.343 14.609-14.608a72.068 72.068 0 1 0 -35.314-35.314l-14.608 14.609-2.343-2.344a8 8 0 0 0 -11.314 0l-71.716 71.716a36.284 36.284 0 0 0 25.657 61.941zm139.716-232a56 56 0 1 1 -56 56 56.064 56.064 0 0 1 56-56zm-56.824 100.137a72.611 72.611 0 0 0 12.687 12.687l-11.863 11.863-12.687-12.687zm-31.176 15.176 28.687 28.687-12.687 12.687-28.687-28.687zm-66.059 66.06 42.059-42.06 28.687 28.687-42.06 42.059a20.284 20.284 0 0 1 -28.686-28.686z"/><path d="m488 152h-176a8 8 0 0 0 -5.657 2.343l-53.656 53.657h-20.687v-40a8 8 0 0 0 -8-8h-168a8 8 0 0 0 -8 8v152a8 8 0 0 0 8 8h48v-16h-40v-136h152v64h16v-16h20.687l53.656 53.657a8 8 0 0 0 5.657 2.343h176a8 8 0 0 0 8-8v-112a8 8 0 0 0 -8-8zm-8 112h-164.687l-40-40h20.687a8 8 0 0 0 0-16h-20.687l40-40h164.687z"/><path d="m320 192h24v16h-24z"/><path d="m360 192h104v16h-104z"/><path d="m320 224h56v16h-56z"/><path d="m392 224h32v16h-32z"/>
                            </svg>            
                            <h2 class="title_pie">Mots clés</h2>
                        </div>
                        <div class="inline-block mt-4">
                            <div class="flex position_keyword1 ">
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                            </div>
                            <div class="flex position_keyword2">
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                            </div>
                            <div class="flex position_keyword3">
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                                        <div class=" keyword_div ml-6"><h2 class="text-lg mt-2 font-semibold text-gray-700">Loi</h2></div>
                            </div>
                        </div>
                 </div>
          </div>
   </div>
  
		)
	}
}

export default ANAD ;