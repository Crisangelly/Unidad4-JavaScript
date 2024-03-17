import React from "react";
import { Link } from "react-router-dom"
import "../styles/header.css"
import CambiarTema from "../utils/hooks/CambiarTema.jsx"

import { useState } from "react"
import Loading from "./Loading.jsx";

function Header (){
  const [carga, setCarga] = useState(false) 

  const preparar_carga = () =>{
    //console.debug('estoy cargando el header')
    setCarga(true)
    setTimeout(()=>{
      setCarga(false);
    }, 1500)
  }

  return(
    <>
    {carga && <Loading loader_tipo="loader-spinner-pantalla" />}
    <header className="header" onLoad={preparar_carga} > {/*detectar cuando cargue la cabecera */}
      <div className="div-logo" >
        <Link to="/" className="link-header" onClick={preparar_carga}>{/*detectar cuando hagas click en el enlace*/}
          <img src="src/assets/logo.png" alt="Logo de la App" className="logo-header"/>
          <h1 className="titulo-header">GitHub User Finder </h1>
        </Link>
      </div>
      <CambiarTema />
    </header>
    </>
  );
}

export default Header;