import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import API_GITHUB from './conexion_api.js'

function App() {
  const [count, setCount] = useState(0)

  const [usuario, setUsuario] = useState([])

  const fETCH_DATA = () => {
    return API_GITHUB.get("/PaolaMarcano") //Para ver otro usuario se cambia la url
    .then((response) => setUsuario(response.data));
  }

  useEffect(() => {
    fETCH_DATA();
  }, [])

  return (
    <>
      <img src={usuario.avatar_url}></img>
      <ul>
        <li>Nombre: {usuario.name}</li>
        <li>Nombre de usuario: {usuario.login}</li>
        <li>Empresa: {usuario.company}</li>
        <li>Repositorios públicos: {usuario.public_repos}</li>
      </ul>
    </>
  )
}

export default App
