import { useState, useEffect } from "react"
import React from "react";
import { LuSun } from "react-icons/lu"
import {  FiMoon } from "react-icons/fi";
import "../../styles/checkbox.css"

function CambiarTema() {
    const verTOS = () => {//Para establecer el tema del sistema al cargar la página
        const osDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (osDark) { return 'dark'; } else { return 'light'; }
    }

    const [tema, setTema] = useState(verTOS());
    console.debug('Actualizar tema a:', tema);

    //Para cambiar el tema según la configuración del sistema:
    const sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)');
    const cambiarPorSistema = (event) => {
        //console.log('oscuro:',event.matches);
        const check = document.getElementById("checkTheme");//Para poder cambiar el valor del checkbox
        if (event.matches) {
            check.checked = true;
            setTema('dark');
        } else {
            check.checked = false;
            setTema('light');
        }
        //setTema(event.matches ? "dark" : "light");
    }
    sistemaOscuro.addEventListener("change", cambiarPorSistema);//Para detectar un cambio en el tema del sistema

    //Para cambiar el tema según el checkbox:
    function suicheChange(event) {
        setTema(event.target.checked ? "dark" : "light");
        //console.log(event.target.checked);
    }
    //Para cambiar el valor del checkbox después de cargar la página
    window.onload = function () {
        const check = document.getElementById("checkTheme");
        if (tema == 'dark') {
            check.checked = true;
        } else {
            check.checked = false;
        }
    };

    //Para aplicar el tema a la página:
    useEffect(() => {
        document.body.setAttribute('data-theme', tema);
    }, [tema]);

    return (
        <>

            <div className="container-switch">
                <label className="switch" htmlFor="checkTheme">
                    <input id="checkTheme" type="checkbox" onChange={suicheChange} />
                    <span className="slider">
                        <span className="span-radius">
                            <LuSun className="ico-light" />
                            <FiMoon className="ico-dark" />
                        </span>  
                    </span>
                </label>
            </div>
        </>
    )
}

export default CambiarTema