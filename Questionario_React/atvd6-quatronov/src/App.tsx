//Atividade 6: Crie um campo de texto que
//só permite a digitação de números.

import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [texto, setTexto] = useState("");
  const handleChange = (e) => {
    const valor = e.target.value;
    const novoValor = valor.replace(/[^0-9]/g, "");
    setTexto(novoValor);
  };
  return (
    <div className="App">
      <h1>Atividade 6</h1>
      <h2>Digite números no campo abaixo!</h2>
      <textarea
        name="AreaTextoNum"
        id=""
        value={texto}
        onChange={handleChange}
        rows={5}
        cols={40}
        placeholder="Apenas números são permitidos nessa área de texto!"
      ></textarea>
    </div>
  );
}
