import React from "react";

export default function CountIndiv({
  valor,
  incrementar,
  decrementar
}: {
  valor: number;
  incrementar: () => void;
  decrementar: () => void;
}) {
  return (
    <div className="numCalc">
      <h1>Número: {valor}</h1>
      <button onClick={decrementar} className="menos">-</button>
      <button onClick={incrementar} className="mais">+</button>
    </div>
  );
}
