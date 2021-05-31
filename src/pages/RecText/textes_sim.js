import React from 'react';
import "../../tailwind.css";
import Textes from "./textes_rec2" ;


class  textes_similaires extends React.Component {
    
    render() {
      
    return(
      
    <div class= "div_principal ">
        <div class="div-textes  text-gray-500">
                    <span>
                        <svg  className="  fill-current h-12 w-12 stroke-current svg"  viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m131.322 60.261h89.543c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-89.543c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m66.596 97.592h154.27c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-154.27c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m228.365 127.423c0-4.142-3.358-7.5-7.5-7.5h-154.269c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h154.27c4.141 0 7.499-3.358 7.499-7.5z"/><path d="m176.647 189.589 56.776 42.078c3.284 2.434 7.712 2.453 11.019.037 3.303-2.414 4.633-6.637 3.311-10.507l-11.062-32.39c20.027-3.01 35.433-20.333 35.433-41.187v-105.971c.001-22.965-18.683-41.649-41.649-41.649h-173.489c-22.965 0-41.649 18.684-41.649 41.649v105.97c0 22.965 18.684 41.649 41.649 41.649h118.692c.347.001.691.114.969.321zm-146.31-41.969v-105.971c0-14.694 11.955-26.649 26.649-26.649h173.489c14.694 0 26.649 11.955 26.649 26.649v105.97c0 14.694-11.955 26.649-26.649 26.649-3.362 0-6.537 1.633-8.493 4.367-1.956 2.735-2.475 6.267-1.388 9.449l7.043 20.624-42.059-31.17c-2.844-2.108-6.36-3.27-9.901-3.27h-118.691c-14.694.001-26.649-11.954-26.649-26.648z"/><path d="m448.887 99.066c-42.242-41.938-101.229-55.518-154.14-41.848-4.01 1.037-6.421 5.127-5.385 9.138 1.037 4.01 5.125 6.417 9.138 5.385 47.167-12.187 100.984-.585 139.818 37.969 56.888 56.478 56.954 146.046 5.042 202.933-16.269 17.828-29.209 38.022-38.539 60.089-.03 0-.06-.002-.09-.002h-6.577v-8.435c0-10.915-8.879-19.794-19.794-19.794h-9.722v-10.776c0-14.765 7.01-19.615 36.701-78.752 2.371-4.529.036-12.009-6.645-12.009-8.467 0-12.991 4.627-15.984 7.689-2.556 2.614-3.29 3.175-5.259 3.175s-2.703-.561-5.259-3.175c-9.957-10.184-21.651-10.556-31.968 0-2.555 2.614-3.289 3.175-5.257 3.175-1.967 0-2.701-.561-5.256-3.175-9.955-10.184-21.648-10.557-31.966 0-2.555 2.614-3.289 3.175-5.257 3.175-1.967 0-2.701-.561-5.256-3.175-2.993-3.062-7.516-7.69-15.983-7.69-6.699 0-8.967 7.573-6.645 12.009 30.067 59.884 36.701 64.032 36.701 78.752v10.776h-9.722c-10.915 0-19.794 8.879-19.794 19.794v8.435h-6.577c-.005 0-.01 0-.014 0-9.297-22.05-22.193-42.166-38.405-59.858-22.614-24.677-36.191-56.625-38.231-89.958-.252-4.135-3.821-7.29-7.944-7.028-4.134.253-7.281 3.81-7.028 7.944 2.249 36.752 17.216 71.973 42.144 99.175 14.805 16.156 26.626 34.492 35.222 54.571-5.589 4.292-9.201 11.035-9.201 18.609 0 6.159 2.389 11.767 6.285 15.957-3.896 4.189-6.285 9.798-6.285 15.957s2.389 11.767 6.285 15.957c-3.896 4.19-6.285 9.798-6.285 15.957 0 11.801 8.761 21.59 20.12 23.216.81 16.001 14.083 28.77 30.281 28.77h85.629c16.199 0 29.471-12.769 30.281-28.77 11.359-1.626 20.12-11.415 20.12-23.216 0-6.159-2.389-11.767-6.285-15.957 3.896-4.19 6.285-9.798 6.285-15.957s-2.389-11.767-6.285-15.957c3.896-4.19 6.285-9.798 6.285-15.957 0-7.548-3.587-14.27-9.143-18.564 8.634-20.125 20.513-38.561 35.394-54.869 57.25-62.73 57.135-161.452-5.55-223.685zm-160.287 169.399c8.773 1.657 14.63-1.963 19.873-7.326 2.555-2.614 3.289-3.175 5.256-3.175 1.968 0 2.702.561 5.257 3.175 9.955 10.186 21.648 10.556 31.966 0 2.555-2.614 3.289-3.175 5.257-3.175 1.969 0 2.703.561 5.259 3.175 5.267 5.387 10.99 9.007 19.879 7.325-17.675 36.484-27.708 45.537-27.708 65.26v10.776h-37.333v-10.776c.001-19.722-10.03-28.773-27.706-65.259zm-1.808 95.83c0-2.644 2.15-4.794 4.794-4.794h86.776c2.644 0 4.794 2.15 4.794 4.794v8.435h-96.364zm90.996 132.705h-85.629c-7.84 0-14.315-5.923-15.207-13.528h116.042c-.891 7.605-7.365 13.528-15.206 13.528zm26.945-28.528h-139.518c-4.663 0-8.457-3.794-8.457-8.457s3.794-8.457 8.457-8.457h139.518c4.663 0 8.457 3.794 8.457 8.457s-3.794 8.457-8.457 8.457zm-89.759-48.828h89.759c4.663 0 8.457 3.793 8.457 8.457s-3.794 8.457-8.457 8.457h-139.518c-4.663 0-8.457-3.794-8.457-8.457s3.794-8.457 8.457-8.457h14.696c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-14.696c-4.663 0-8.457-3.794-8.457-8.457s3.794-8.457 8.457-8.457h139.518c4.663 0 8.457 3.794 8.457 8.457s-3.794 8.457-8.457 8.457h-89.759c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"/></g></g></svg>
                        <h1 class="titre-principal  ml-4">Textes similaires recommandés</h1>
                    </span>
                 </div>
        <div className="Rectangle_central overflow-y-auto  ">
                <div class="mt-4 flex right inline-blockright preferences  ">
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
                  <div class="ml-2 mt-6 pretty p-icon p-toggle p-plain">
                  <i class="fa fa-clone fa-lg"></i>  
                   </div>   
                                            
                </div> 
                <div class="corps_texte">
                    <div >
                        <h2  class=" mt-6  titre_texte2" > Loi des finances 2021  </h2> 
                        <p class=" mt-6">Article 1er. — Sous réserve des dispositions de la présente loi, la perception des impôts directs et taxes
                            assimilées, des impôts indirects, des contributions diverses, ainsi que tous autres revenus et produits au profit
                            de l’Etat continuera à être opérée pendant l’année 2021, conformément aux lois et textes d’application en
                            vigueur, à la date de publication de la présente loi au Journal officiel de la République algérienne démocratique
                            et populaire. <br></br><br></br>
                            Continueront à être perçus en 2021, conformément aux lois, ordonnances, décrets législatifs et textes
                            d’application en vigueur, à la date de publication de la présente loi au Journal officiel de la République
                            algérienne démocratique et populaire, les divers droits, produits et revenus affectés aux comptes spéciaux du
                            Trésor, aux collectivités locales, aux établissements publics et organismes dûment habilités.</p>                 
                    </div>
                </div>   
                
        </div> 
        <div className=" Rectangle_reduit "  >
             <Textes />
             <Textes />
             <Textes />
             <Textes />
             <Textes />
             <Textes />
        </div>
    </div>
        

)
}
}
        

export default textes_similaires ;
        