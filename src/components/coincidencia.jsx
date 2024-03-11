import React from "react";

function Coincidencia ({ avatar_url, name, login, company, public_repos }) {
  return(
    <div>
      <img src={avatar_url}></img>
      <ul>
        <li>Nombre: {name}</li>
        <li>Nombre de usuario: {login}</li>
        <li>Empresa: {company}</li>
        <li>Repositorios públicos: {public_repos}</li>
      </ul>
    </div>
  );
}

export default Coincidencia;