//Atividade 18: Crie um conjunto de opções que podem ser
//ativadas ou desativadas. No envio do formulário as opções devem ser salvas em um json.

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [pref, setPref] = useState<string[]>([]);
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState("");

  const options = ["Hamburguer", "batatas fritas", "Coca-Cola", "Sundae"];
  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      setPref([...pref, value]);
    } else {
      setPref(pref.filter((item) => item !== value));
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEnviado(true);

    const pedidosSalvos = JSON.parse(localStorage.getItem("Pedidos") || "{}");

    pedidosSalvos[nome] = pref
    console.log("Pedidos: ", pedidosSalvos);
    localStorage.setItem("Pedidos", JSON.stringify(pedidosSalvos));

  };

  return (
    <div className="App">
      <h1>Atividade 17:</h1>
      <h2>Escolha no Formulário abaixo, seus itens de preferência!</h2>

      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="NomeUser"
            placeholder="Primeiramente, me conte teu nome!"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <p>O que vai ser Hoje?</p>
          {options.map((option, index) => (
            <div key={index}>
              <label>
                <input type="checkbox" value={option} onChange={handleChange} />
                {option}
              </label>
            </div>
          ))}
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div>
          <h1>O pedido de {nome} Hoje foi:</h1>
          {pref.length > 0 ? (
            <ul>
              {pref.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum item foi escolhido!</p>
          )}
        </div>
      )}
    </div>
  );
}
