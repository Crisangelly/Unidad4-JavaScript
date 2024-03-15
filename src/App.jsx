import "./styles/App.css"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Buscador from "./utils/hooks/Buscador.jsx"

function App() {
  return (
    <>
      <Header />
      <main>
        <Buscador />
      </main>
      <Footer />
    </>
  )
}

export default App
