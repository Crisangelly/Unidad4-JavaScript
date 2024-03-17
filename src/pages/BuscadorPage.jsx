import { useState } from "react"
import "../styles/App.css"
import Buscador from "../utils/hooks/Buscador.jsx"

import Loading from "../components/Loading"

function BuscadorPage() {
  const [carga, setCarga] = useState(true);
  setTimeout(() => {
    setCarga(false);
  }, 2000)


  const preparar_carga = () => {
    console.log('ya cargué');
    setCarga(false);
    /*
    setCarga(true)
    setTimeout(() => {
      setCarga(false);
    }, 5000)
    */
  }
  return (
    <>
      {carga && <Loading loader_tipo="loader-spinner-pantalla" />}
      <main className="buscador-main" onLoad={preparar_carga}>
        <Buscador />
      </main>
    </>
  )
}

export default BuscadorPage