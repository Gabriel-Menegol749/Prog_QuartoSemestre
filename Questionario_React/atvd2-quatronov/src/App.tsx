//Atividade 2:Crie um campo de texto que permite
//filtrar uma lista de palavras imediatamente (onChange).

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [nomesDeAlunos] = useState([
    "Ana Silva",
    "André Silva",
    "Bernardo Costa",
    "Beatriz Lima",
    "Carlos Pereira",
    "Cassandra Muller",
    "Daniel Machado",
    "Dario Fonseca",
  ]);
  const [filtro, setFiltro] = useState("");

  const resultadoFiltro = nomesDeAlunos.filter((nome_Aluno) =>
    nome_Aluno.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Atividade 2: Crie um filtro</h1>
      <h2>No campo abaixo, digite a palavra que deseja filtrar!</h2>

      <input
        type="text"
        className="filtro"
        placeholder="Digite o nome do aluno"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <ul className="listaNomes">
        {resultadoFiltro.map((nome_aluno, index) => (
          <li key={index}>{nome_aluno}</li>
        ))}
      </ul>
    </div>
  );
}
