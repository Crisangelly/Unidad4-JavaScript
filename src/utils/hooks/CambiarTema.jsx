import { useState, useEffect } from "react"

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

    /*
    const sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    useEffect(() => {
        if (sistemaOscuro) {
            setTema('dark');
        }
    }, [sistemaOscuro])
    
    function verTOS() {
        const temaUser = window.matchMedia('(prefers-color-scheme: dark)');
        //console.log(temaUser)
        //console.log(temaUser.matches);
        if (temaUser.matches) {
            return false;
        } else {
            return true;
        }
    }

    setInterval(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTema('dark');
        } else {
            setTema('light');
        }
    }, 2000)

    const sistemaClaro = window.matchMedia('(prefers-color-scheme: light)').matches;
    useEffect(() => {
        if (sistemaClaro) {
            setTema('light');
        } else {
            let check = document.getElementById("checkTheme");
            check.checked = true;
            setTema('dark');
        }
    }, [sistemaClaro])
    */
    /*const cambiarTema = async () => {
        setTema(!tema);
    }
    <button onClick={cambiarTema}>{tema}</button>*/
    return (
        <>

            <div className="container-switch">
                <span>Cambiar tema </span>
                <label className="switch">
                    <input id="checkTheme" type="checkbox" onChange={suicheChange} />
                    <span className="slider"></span>
                </label>
            </div>
        </>
    )
}

export default CambiarTema