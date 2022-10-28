import React from 'react';
import logosena from "./IMG/logosena.png"
import "./Titulo.css"

export const  Titulo = () => {
  return (
    <div class="Contenedor">

      <div class="Titulos">
      <h1> Sena</h1>
      </div>

        <div class="center">
        <img className="logo" src={logosena} alt="logosena"></img>
        </div>
    </div>
  )
}