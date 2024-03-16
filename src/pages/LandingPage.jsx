import { Link } from "react-router-dom"
import "../styles/landingPage.css"
import OctocatLogo from "../assets/logo.png"


import { useState } from "react"
import Loading from "../components/Loading"

function LandingPage() {
  const [carga, setCarga] = useState(false) 

  const preparar_carga = () =>{
    setCarga(true)
    setTimeout(()=>{
      setCarga(false);
    }, 5000)
  }

  return (
    <>
      <main className="landingPage-main">
        <div className="info-div">
          <div className="conteiner-h1">{/*Cris*/}
          < h1 className="info-h1">¡Bienvenido!</h1>
          </div>
          <p className="info-p">Busca los usuarios que desees fácil y rápido</p>
          <Link to="/buscador" className="link-landingPage" onClick={preparar_carga}>Comienza Ahora</Link> {/*El problema empieza aquí */}
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