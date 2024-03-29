import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/landingPage.css"
import OctocatLogo from "../assets/logo.png"

function LandingPage({ cargador, parador }) {
  useEffect(function () {
    parador()//Detener Loading
  }, [])
  return (
    <>
      <main className="landingPage-main">
        <div className="info-div">
          <div className="conteiner-h1">
            < h1 className="info-h1">¡Bienvenido!</h1>
          </div>
          <p className="info-p">Busca los usuarios que desees fácil y rápido</p>
          <Link to="/buscador" className="link-landingPage" onClick={cargador}>Comienza Ahora</Link>
        </div>
        <div className="octocat-div">
          <h1 className="info-h11">¡Bienvenido!</h1>
          <img src={OctocatLogo} alt="Octocat" className="octocat-img"></img>
        </div>
      </main>
    </>
  )
}

export default LandingPage