import React from "react";
import { Link } from "react-router-dom"
import "../styles/header.css"
import CambiarTema from "../utils/hooks/CambiarTema.jsx"

function Header (){
  return(
    <header className="header" >
      <div className="div-logo" >
        <Link to="/" className="link-header">
          <img src="src/assets/logo.png" alt="Logo de la App" className="logo-header"/>
          <h1 className="titulo-header">GitHub User Finder </h1>
        </Link>
      </div>
      <CambiarTema />
    </header>
  );
}

export default Header;