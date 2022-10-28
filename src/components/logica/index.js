import React from 'react'
import { useContador } from '../Hooks/useContador';
import { Contador } from "../contador/index";
export const Logica = () => {
  const { reset, disminuir, aumentar, data } = useContador();
  return (
    <div>
      <Contador Contador={data} />
      <button onClick={() => disminuir()}>Disminuir</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => aumentar()}>Aumentar</button>
    </div>
  )
}