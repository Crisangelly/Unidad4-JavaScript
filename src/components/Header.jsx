import React from "react";
import '../styles/header.css'

function Header (){
    return(
        <header className="header" > 
            <img src="src/assets/logo.png" alt="logo de la App" className="logo-header"/>
            <h1 className="titulo-header">GitHub User Finder </h1>
        </header>
    );

}

export default Header;