import { Link } from "react-router-dom"
import "../styles/landingPage.css"
import OctocatLogo from "../assets/logo.png"

function LandingPage() {
  return (
    <>
      <main className="landingPage-main">
        <div className="info-div">
          <h1 className="info-h1">¡Bienvenido!</h1>
          <p className="info-p">Busca los usuarios que desees fácil y rápido</p>
          <Link to="/buscador" className="link-landingPage">Comienza Ahora</Link>
        </div>
        <div className="octocat-div">
          <img src={OctocatLogo} alt="Octocat" className="octocat-img"></img>
        </div>
      </main>
    </>
  )
}

export default LandingPage