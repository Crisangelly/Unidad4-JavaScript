import { useState } from 'react'
import './App.css'

import API_GITHUB from './conexion_api.js'

import Coincidencia from './components/coincidencia.jsx';

function App() {
  const [buscar0, setBuscar0] = useState("");
  const [buscar, setBuscar] = useState("");
  const [usuario, setUsuario] = useState([])

  //Buscar usuarios
  const fETCH_USERS = async () => {
    const RESPONSE = await API_GITHUB.get('/search/users', {
      params: {
        per_page: 3, //limitar resultados a tres
        page: 1,
        q: buscar0
      }
    });
    console.debug(RESPONSE.data);
    //console.debug(RESPONSE.data.items)
    let usuarioV = '';
    for (const user of RESPONSE.data.items) {
      console.log(user.login) //mostrar usuarios
      usuarioV = user.login
    }
    const RESPONSE2 = await API_GITHUB.get(`/users/${usuarioV}`);//Mostrar el último usuario (ARREGLAR para mostrar los tres)
    return setUsuario(RESPONSE2.data);
  }


  //Consultar datos de usuario
  const fETCH_DATA = async () => {
    const RESPONSE = await API_GITHUB.get(`/users/${buscar}`); //Para ver otro usuario se cambia la url
    return setUsuario(RESPONSE.data);
  }

  return (
    <>
      <input type="text" placeholder="Buscar Users" onChange={(e) => setBuscar0(e.target.value)}></input>
      <button onClick={fETCH_USERS}>Buscar</button>
      <input type="text" placeholder="Buscar" onChange={(e) => setBuscar(e.target.value)}></input>
      <button onClick={fETCH_DATA}>Buscar</button>
      <Coincidencia
        avatar_url={usuario.avatar_url}
        name={usuario.name}
        login={usuario.login}
        company={usuario.company}
        public_repos={usuario.public_repos}
      />
    </>
  )
}

export default App
