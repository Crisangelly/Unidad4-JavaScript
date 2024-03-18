import React from "react";
import { Link } from "react-router-dom"
import "../styles/header.css"
import CambiarTema from "../utils/hooks/CambiarTema.jsx"
import OctocatLogo from "../assets/logo.png"

function Header({ parador, cargador }) {
  return (
    <>
      <header className="header" onLoad={parador} > {/*detectar cuando cargue la cabecera */}
        <div className="div-logo" >
          <Link to="/" className="link-header" onClick={cargador}>{/*detectar cuando hagas click en el enlace*/}
            <img src={OctocatLogo} alt="Logo de la App" className="logo-header" />
            <h1 className="titulo-header">GitHub User Finder </h1>
          </Link>
        </div>
        <CambiarTema />
      </header>
    </>
  );
}

export default Header;