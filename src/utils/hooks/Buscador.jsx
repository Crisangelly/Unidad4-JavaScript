import { useState, useEffect } from "react"

import API_GITHUB from "../api/conexion_api.js"

import Coincidencia from "../../components/Coincidencia.jsx"
import Loading from "../../components/Loading.jsx";

function Buscador({ parador }) {
  useEffect(function () {
    parador()//Detener Loading
  })


  function active_debounce(textoBusq, retraso = 1000) {
    const [debounceValor, setDebounceValor] = useState(textoBusq);

    useEffect(() => {
      const actTexto = setTimeout(() => {
        console.log('Recibiendo', textoBusq)
        setDebounceValor(textoBusq);
      }, retraso);
      return () => {
        clearTimeout(actTexto);
      };
    }, [textoBusq, retraso]);//Recibir el texto del usuario y el tiempo de espera

    return debounceValor;//Enviar el último valor
  };


  const [buscar, setBuscar] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [carga, setCarga] = useState(false)
  const debounceValue = active_debounce(buscar);

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
    /*setCarga(true)*/
    setUsuarios([])
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

  //useEffect(fETCH_USERS(debounceValue), [debounceValue])
  useEffect(() => {
    if (debounceValue) {
      console.log('cambiando aqui', debounceValue)
      fETCH_USERS(debounceValue)
    }
  }, [debounceValue])

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




  /*
    function active_debounce(callback, delay = 1000) {
      let while_typing;
      return (...args) => {
        clearTimeout(while_typing);
        while_typing = setTimeout(() => {
          callback(...args, 'de active');
        }, delay);
      }
    }
    */

  const debounceResquets = (valorBusq) => {
    if (!valorBusq) return
    setBuscar(valorBusq)
    setCarga(true);
    //empezarCarga()
    console.log('escribiendo:', valorBusq);
  }

  return (
    <>
      <div className="buscadorContainer">
        <h1>Ingresa el nombre de usuario</h1>
        <input type="text" id="input" placeholder="Buscar Users" onChange={(e) => debounceResquets(e.target.value)}></input>
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