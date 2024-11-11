//Atividade 13: Crie um slider que altera o
//tamanho de uma textarea e um campo numérico
//que altera o tamanho do texto dentro dela.

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [tamanhoRange, setTamanhoRang] = useState(100);
  const handleChangeRange = (event: any) => {
    setTamanhoRang(event.target.value);
  };

  return (
    <div className="App">
      <h1>Atividade 13:</h1>
      <h2>Altere o tamanho do campo de texto com o slider abaixo!</h2>
      <input
        type="range"
        min={100}
        max={500}
        value={tamanhoRange}
        onChange={handleChangeRange}
      />

      <textarea
        style={{
          width: `${tamanhoRange}px`,
          height: `200px`,
        }}
        placeholder="Digite seu texto aqui!"
      ></textarea>
    </div>
  );
}
