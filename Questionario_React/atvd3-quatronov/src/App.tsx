//Crie um campo de texto que, ao digitar
//informe a última letra digitada (onInput).

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [valorInput, setValorInput] = useState("");
  const [ultimaLetra, setUltimaLetra] = useState("");

  const handleinput = (e) => {
    const valor = e.target.value;
    setValorInput(valor);

    if (valor.length > 0) {
      setUltimaLetra(valor[valor.length - 1]);
    } else {
      setUltimaLetra("");
    }
  };

  return (
    <div className="App">
      <h1>Atividade 3:</h1>
      <h2>Digite no campo abaixo e para vizualizar a ultima letra digitada</h2>

      <input
        type="text"
        className="Campos_Texto"
        placeholder="Digite uma frase:"
        value={valorInput}
        onInput={handleinput}
      />
      <h2>Ultima letra: {ultimaLetra}</h2>
    </div>
  );
}
