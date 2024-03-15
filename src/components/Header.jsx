import React from "react";
import { Link } from "react-router-dom"
import "../styles/header.css"

function Header (){
  return(
    <header className="header" >
      <nav className="nav" >
        <Link to="/" className="link-nav">
          <img src="src/assets/logo.png" alt="logo de la App" className="logo-header"/>
          <h1 className="titulo-header">GitHub User Finder </h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;