import { useState } from 'react'
import './styles/App.css'

import API_GITHUB from './conexion_api.js'

import Coincidencia from './components/Coincidencia.jsx';
import './styles/coincidencia.css'

function App() {
  const [buscar, setBuscar] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  //Buscar usuarios
  const fETCH_USERS = async () => {
    const RESPONSE = await API_GITHUB.get('/search/users', {
      params: {
        per_page: 3, //limitar resultados a tres
        page: 1,
        q: buscar
      }
    });
    console.debug(RESPONSE.data);
    //console.debug(RESPONSE.data.items)
    let usuarioV = '';
    let usuarios_3 = [];
    for (const user of RESPONSE.data.items) {
      console.log(user) //mostrar usuarios
      usuarioV = user.login
      const RESPONSE2 = await API_GITHUB.get(`/users/${usuarioV}`);//Mostrar el último usuario (ARREGLAR para mostrar los tres)
      usuarios_3.push(RESPONSE2.data)
    }
    return setUsuarios(usuarios_3);
  }


  const [tema, setTema] = useState(true);
  const cambiarTema = async () => {
    setTema(!tema)
  }

  return (
    <>
      <main>
        <button onClick={cambiarTema}>{tema ? 'Oscuro' : 'Claro'}</button>
        <hr></hr>
        <input type="text" placeholder="Buscar Users" onChange={(e) => setBuscar(e.target.value)}></input>
        <button onClick={fETCH_USERS}>Buscar</button>
        <div className='usuariosContainer'>
          {
            usuarios.map(usuario => (
              <Coincidencia
                key={usuario.id}
                avatar_url={usuario.avatar_url}
                name={usuario.name}
                login={usuario.login}
                company={usuario.company}
                public_repos={usuario.public_repos}
              />
            ))
          }
        </div>
      </main>
    </>
  )
}

export default App
