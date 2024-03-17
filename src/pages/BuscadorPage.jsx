import { useEffect } from "react"
import "../styles/App.css"
import Buscador from "../utils/hooks/Buscador.jsx"

function BuscadorPage({ parador }) {
  /*useEffect(function () {
    parador()
  })*/

  return (
    <>
      <main className="buscador-main">
        <Buscador parador={parador} />
      </main>
    </>
  )
}

export default BuscadorPage