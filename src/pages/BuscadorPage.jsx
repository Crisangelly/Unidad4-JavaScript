import { useState, useEffect } from "react"
import "../styles/App.css"
import Buscador from "../utils/hooks/Buscador.jsx"

import Loading from "../components/Loading"

function BuscadorPage({ parador }) {
  /*
  const [carga, setCarga] = useState(true);
  setTimeout(() => {
    setCarga(false);
  }, 2000)
*/
  useEffect(function () {
    parador()
    console.log('render!')
  })

  return (
    <>
      <main className="buscador-main">
        <Buscador />
      </main>
    </>
  )
}

export default BuscadorPage