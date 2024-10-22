import React from "react";

export default function GlobalControls({
  alterarTodos
}: {
  alterarTodos: (valor: number) => void;
}) {
  return (
    <div className="botoesGlobais">
      <button onClick={() => alterarTodos(-1)} className="menosGlobal">Diminuir Todos</button>
      <button onClick={() => alterarTodos(1)} className="maisGlobal">Aumentar Todos</button>
    </div>
  );
}
