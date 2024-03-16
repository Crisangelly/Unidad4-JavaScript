import { useState, useEffect } from "react"

function CambiarTema() {
    const [tema, setTema] = useState("light");
    function suicheChange(event) {
        setTema(event.target.checked ? "dark" : "light");
        //console.log(event.target.checked);
    }
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
    
    const sistemaClaro = window.matchMedia('(prefers-color-scheme: light)').matches;
    useEffect(() => {
        if (sistemaClaro) {
            setTema('light');
        } else {
            setTema('dark');
        }
    }, [sistemaClaro])
    
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
    */

    setInterval(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTema('dark');
        } else {
            setTema('light');
        }
    }, 2000)

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