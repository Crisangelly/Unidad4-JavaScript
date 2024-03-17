import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./styles/App.css"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import BuscadorPage from "./pages/BuscadorPage.jsx"

import Loading from "./components/Loading"

function App() {
  const [carga2, setCarga2] = useState(false);
  const iniciarCarga = () => {
    setCarga2(true);
    setTimeout(() => {
      setCarga2(false);
    }, 10000)
  }

  const detenerCarga = () => {
    setTimeout(() => {
      setCarga2(false);
    }, 1000)
  }
  
  return (
    <>
    <Router>
      <Header />
      {carga2 && <Loading loader_tipo="loader-spinner-pantalla" />}
      <Routes>
        <Route path="/" element={<LandingPage cargador={iniciarCarga}/>}/>
        <Route path="/buscador" element={<BuscadorPage cargando={carga2} parador={detenerCarga}/>}/>
      </Routes>
    </Router> 

    <Footer /> 
    </>
  )
}

export default App
