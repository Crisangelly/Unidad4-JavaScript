import { useState } from 'react'
import './App.css'

import API_GITHUB from './conexion_api.js'

import Coincidencia from './components/coincidencia.jsx';

function App() {
  const [buscar, setBuscar] = useState("");
  const [usuario, setUsuario] = useState([])

  const fETCH_DATA = async () => {
    const RESPONSE = await API_GITHUB.get(`/${buscar}`) ; //Para ver otro usuario se cambia la url
    return setUsuario(RESPONSE.data);
  }

  return (
    <>
      <input type="text" placeholder="Buscar" onChange={(e) => setBuscar(e.target.value)}></input>
      <button onClick={fETCH_DATA}>Buscar</button>
      <Coincidencia
        avatar_url= {usuario.avatar_url}
        name= {usuario.name}
        login= {usuario.login}
        company= {usuario.company}
        public_repos= {usuario.public_repos}
      />
    </>
  )
}

export default App
