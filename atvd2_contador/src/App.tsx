import React, { useState } from "react";
import "./styles.css";
import CountIndiv from "./componentes/count_indiv";
import GlobalControls from "./componentes/count_glob";

export default function App() {
  const [contadoresIndividuais, setContadoresIndividuais] = useState([0, 0, 0, 0]);
  const [contadoresGlobais, setContadoresGlobais] = useState([0, 0, 0, 0]);

  // Função para atualizar um contador individual
  const atualizarContadorIndiv = (index: number, valor: number) => {
    const novosContadores = [...contadoresIndividuais];
    novosContadores[index] += valor;
    setContadoresIndividuais(novosContadores);
  };

  // Função para atualizar todos os contadores globais
  const alterarTodosGlobais = (valor: number) => {
    setContadoresGlobais(contadoresGlobais.map((contador) => contador + valor));
  };

  return (
    <div className="App">
      <h1>Contador! Clique nos botões para iniciar a contagem!</h1>

      <h2>Botões Individuais</h2>
      <div className="botoesIndividuais">
        {contadoresIndividuais.map((contador, index) => (
          <CountIndiv
            key={index}
            valor={contador}
            incrementar={() => atualizarContadorIndiv(index, 1)}
            decrementar={() => atualizarContadorIndiv(index, -1)}
          />
        ))}
      </div>

      <h2>Botões Globais</h2>
      <GlobalControls alterarTodos={alterarTodosGlobais} />

      <div className="divsGlobais">
        {contadoresGlobais.map((contador, index) => (
          <h1 key={index} className="num">Número: {contador}</h1>
        ))}
      </div>
    </div>
  );
}
