//Atividade 1: Crie um campo de texto que permite
//enviar palavras para uma lista ao clicar em um botão ou enviar (onSubmit).

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [itens, setItens] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function adicionarItens(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      setItens([...itens, inputValue]);
      setInputValue("");
    }
  }

  function limparLista() {
    setItens([]);
  }

  return (
    <div className="App">
      <h1>Atividade 1: Lista.</h1>
      <h2>Na lista abaixo, digite algo no input e aperte em enviar!</h2>

      <div className="conteudo">
        <div className="listade_Itens"></div>
        <ul>
          {itens.map((itens, index) => {
            return <li key={index}>{itens}</li>;
          })}
        </ul>

        <br />
        <form onSubmit={adicionarItens} className="adicionaItem">
          <input
            type="text"
            className="novoItem"
            placeholder="Digite um novo item:"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input type="submit" className="enviar" />

          <button className="limpaLista" onClick={limparLista}>
            Limpar Lista
          </button>
        </form>
      </div>
    </div>
  );
}
