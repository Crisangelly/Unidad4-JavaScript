import { useState } from "react"

function CambiarTema() {
    function verTOS() {
        const temaUser = window.matchMedia('(prefers-color-scheme: dark)');
        console.log(temaUser)
        if (temaUser.matches) {
            return false;
        } else {
            return true;
        }
    }
    const [tema, setTema] = useState(verTOS());
    const cambiarTema = async () => {
        setTema(!tema);
    }
    return (
        <>
            <button onClick={cambiarTema}>{tema ? "Oscuro" : "Claro"}</button>
            <hr></hr>
        </>
    )
}

export default CambiarTema