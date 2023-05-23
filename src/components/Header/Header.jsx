import React from "react";

import "./Header.css";

function Header(props){
  const { name, office, photo } = props.informations;
   
    return (
        <header>
        <img src={photo} alt="Foto de perfil" />
        <h1 id="name-perfil">{name}</h1>
        <h3 id="eventSubtitle">{office}</h3>
      </header>
    )
}

export default Header;