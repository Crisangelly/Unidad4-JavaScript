import { useState, useEffect } from "react"

import API_GITHUB from "../api/conexion_api.js"

import Coincidencia from "../../components/Coincidencia.jsx"
import Loading from "../../components/Loading.jsx";

function Buscador({parador}) {
  useEffect(function () {
    parador()//Detener Loading
  })

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
    /*setCarga(true)
    setUsuarios([])*/
    console.debug(RESPONSE.data);
    let usuarios_3 = [];
    for (const user of RESPONSE.data.items) {
      let usuarioN = user.login
      const RESPONSE2 = await API_GITHUB.get(`/users/${usuarioN}`);
      usuarios_3.push(RESPONSE2.data)
    }
    setCarga(false);
    return setUsuarios(usuarios_3);
  }

  /* Loading */
  const empezarCarga= () =>{
    setCarga(true);
    setUsuarios([])
    setTimeout(() => {
      fETCH_USERS();
    }, 500);
  }

  return (
    <>
      <div className="buscadorContainer">
        <h1>Ingresa el nombre de usuario</h1>
        <input type="text" placeholder="Buscar Users" onChange={(e) => setBuscar(e.target.value)}></input>
        <button onClick={empezarCarga}>Buscar</button>
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
