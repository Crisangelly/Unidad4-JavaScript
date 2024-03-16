import { useState } from "react"

import API_GITHUB from "../api/conexion_api.js"

import Coincidencia from "../../components/Coincidencia.jsx"
import Loading from "../../components/Loading.jsx";

function Buscador() {
  const [buscar, setBuscar] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [carga, setCarga] = useState(false) 

  //Buscar usuarios
  const fETCH_USERS = async () => {
    const RESPONSE = await API_GITHUB.get("/search/users", {
      params: {
        per_page: 3, //limitar resultados a tres
        page: 1,
        q: buscar
      }
    });
    setCarga(true)
    setUsuarios([])
    console.debug(RESPONSE.data);
    let usuarioV = '';
    let usuarios_3 = [];
    for (const user of RESPONSE.data.items) {
      usuarioV = user.login
      const RESPONSE2 = await API_GITHUB.get(`/users/${usuarioV}`);//Mostrar el último usuario 
      usuarios_3.push(RESPONSE2.data)
    }
    setCarga(false)
    return setUsuarios(usuarios_3);
  }

  return (
    <>
      <div>
        <h1>Ingresa el nombre de usuario</h1>
        <input type="text" placeholder="Buscar Users" onChange={(e) => setBuscar(e.target.value)}></input>
        <button onClick={fETCH_USERS}>Buscar</button>
        {carga && <Loading />} 
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
      </div>
    </>
  )
}

export default Buscador
