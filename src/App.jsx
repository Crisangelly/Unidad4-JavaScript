import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./styles/App.css"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import BuscadorPage from "./pages/BuscadorPage.jsx"

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/buscador" element={<BuscadorPage />}/>
      </Routes>
    </Router> 

    <Footer /> 
    </>
  )
}

export default App
