import { useState, useEffect } from "react"

import API_GITHUB from "../api/conexion_api.js"

import Coincidencia from "../../components/Coincidencia.jsx"
import Loading from "../../components/Loading.jsx";

function Buscador({ parador }) {
  useEffect(function () {
    parador()//Detener Loading
  })

  const [buscar, setBuscar] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [carga, setCarga] = useState(false)

  //Buscar usuarios
  const fETCH_USERS = async () => {
    const RESPONSE = await API_GITHUB
      .get("/search/users", {
        params: {
          per_page: 3, //limitar resultados a tres
          page: 1,
          q: buscar
        }
      })
      .catch((error) => {
        console.error('Error al realizar la búsqueda:', error.message);
        //console.debug(error)
        return { data: false };
      });
    /*setCarga(true)
    setUsuarios([])*/
    const datosGet = RESPONSE.data;
    console.debug("Respuesta:", datosGet);
    if (!datosGet) {
      alert('Ha ocurrido un error al realizar la búsqueda.')
      return setCarga(false)
    };
    if (datosGet.total_count == 0) {
      alert('No se han encontrado coincidencias.');
      setCarga(false);
      return
    }
    let usuarios_3 = [];
    //let c = 1;
    for (const user of datosGet.items) {
      /*console.log(c)
      if (c == 1) { user.login = 'hsjahshakdh' }*/
      const RESPONSE2 = await API_GITHUB.get(`/users/${user.login}`)
        .catch((error) => {
          console.error('Usuario:', user.login, 'Error:', error.message);
          //console.debug(error);
          return { data: false }
        });
      //console.debug(RESPONSE2.data)
      if (RESPONSE2.data) { usuarios_3.push(RESPONSE2.data) };
      //c++
    }
    setCarga(false);
    return setUsuarios(usuarios_3);
  }

  /* Loading */
  const empezarCarga = () => {
    setCarga(true);
    setUsuarios([]);
    setTimeout(() => {
      fETCH_USERS();
    }, 500);//Tiempo de retador para realizar la búsqueda
    /*
    setTimeout(() => {
      setCarga(false);
    }, 60000);//En caso de que la función no detenga el loader
    */
  }

  const hola = () => {
    console.debug("hola. Ya cargué");
    //setCarga(false);
  }

  return (
    <>
      <div className="buscadorContainer">
        <h1>Ingresa el nombre de usuario</h1>
        <input type="text" placeholder="Buscar Users" onChange={(e) => setBuscar(e.target.value)}></input>
        <button onClick={empezarCarga}>Buscar</button>
        {carga && <Loading />}
        <div className='usuariosContainer' onLoad={hola}>
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
