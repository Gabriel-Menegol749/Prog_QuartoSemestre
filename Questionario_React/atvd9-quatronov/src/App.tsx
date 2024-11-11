//Atividade : Crie um seletor de
//cor que altera a cor de uma div.

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [valorInputCor, setValorInputCor] = useState("#ffffff");
  const handleChange = (e) => {
    setValorInputCor(e.target.value);
  };
  return (
    <div className="App">
      <h1>Atividade 9</h1>
      <h2>Altere a cor do Input, e veja a nova cor do texto da Div!</h2>

      <div className="divTexto">
        <p style={{ color: valorInputCor }}>
          Seja bem vindo ao meu Site, escolha uma cor pra trocar a cor do texto!
        </p>
      </div>

      <input
        type="color"
        value={valorInputCor}
        onChange={handleChange}
        className="inputCor"
      />
    </div>
  );
}
