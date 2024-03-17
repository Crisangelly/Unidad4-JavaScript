import React from "react";
import "../styles/loader.css"
//import { useEffect } from "react"
//import { useParams } from 'react-router-dom';

function Loading ({loader_tipo}) {

/*   let { page } = useParams();

  useEffect(() => {
    console.log("Page cambió verdad?")
    console.log(page)
 }, [page])
 */
/*   window.addEventListener("load", function(e){
    setTimeout(() => {
      const SPINNER = document.querySelector(".loader-spinner-pantalla");
      SPINNER.classList.add("loader-spinner-oculto");
      console.log("Terminó rápido verdad?");
    }, 5000);
  })    */
  /*
  let ruta = window.location.pathname //Se ve la ruta, hay que ver cuando cambia
  console.log(ruta)
*/


  return(
    <div className={loader_tipo ? "loader-spinner-pantalla" : "loader-spinner"}></div>
  );
}

export default Loading;