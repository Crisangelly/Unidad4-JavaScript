import { useState, useEffect } from "react"

import API_GITHUB from "../api/conexion_api.js"
import { active_debounce } from "./debounce.jsx";
import Coincidencia from "../../components/Coincidencia.jsx"
import Loading from "../../components/Loading.jsx";

function Buscador({ parador }) {
  useEffect(function () {
    parador()//Detener Loading
  }, [])

  const [buscar, setBuscar] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [carga, setCarga] = useState(false)

  const debounceTexto = active_debounce(buscar);

  //Buscar usuarios
  const fETCH_USERS = async (valorB) => {
    const RESPONSE = await API_GITHUB
      .get("/search/users", {
        params: {
          per_page: 3, //limitar resultados a tres
          page: 1,
          q: valorB
        }
      })
      .catch((error) => {
        console.error('Error al realizar la búsqueda:', error.message);
        //console.debug(error)
        return { data: false };
      });
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
    for (const user of datosGet.items) {
      const RESPONSE2 = await API_GITHUB.get(`/users/${user.login}`)
        .catch((error) => {
          console.error('Usuario:', user.login, 'Error:', error.message);
          //console.debug(error);
          return { data: false }
        });
      //console.debug(RESPONSE2.data)
      if (RESPONSE2.data) { usuarios_3.push(RESPONSE2.data) };
    }
    //setCarga(false);
    return setUsuarios(usuarios_3);
  }

  /* Loading */
  useEffect(() => {
    setUsuarios([]);
    if (debounceTexto && debounceTexto != '' && debounceTexto != ' ') {//Evitar buscar si está vacío
      if (debounceTexto == ' ') console.log('Espacio')
      console.debug('Actualizando texto:', debounceTexto);
      setCarga(true);
      fETCH_USERS(debounceTexto)
    }
  }, [debounceTexto])

  //Detectar texto en el input
  const debounceResquets = (valorBusq) => {
    setBuscar(valorBusq);
    console.info('escribiendo:', valorBusq);
  }

  //Para ocultar los usuarios mientras se están cargando
  const [mostrar, setMostrar] = useState('flex');
  const estiloUsers = {
    display: mostrar,
  };
  useEffect(() => {
    if (carga) {
      setMostrar('none');
      //console.info('Oculto');
    } else {
      setMostrar('flex');
      //console.info('Mostrar');
    }
  }, [carga]);

  const visible = () => {
    if (carga) {
      //console.debug("hola. Ya cargué (usuarios)");
      setCarga(false);
    }
  }

  return (
    <>
      <div className="buscadorContainer">
        <h1>Ingresa el nombre de usuario</h1>
        <input type="text" id="input" placeholder="Buscar usuarios" onChange={(e) => debounceResquets(e.target.value)}></input>
        {carga && <Loading />}
        <div className='usuariosContainer' style={estiloUsers} onLoad={visible}>
          {
            usuarios.map(usuario => (
              <Coincidencia
                key={usuario.id}
                avatar_url={usuario.avatar_url}
                name={usuario.name}
                login={usuario.login}
                company={usuario.company}
                public_repos={usuario.public_repos}
                enlace_github={usuario.html_url}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Buscador