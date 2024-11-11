//Atividade 7: Crie um slider (range) que mostra seu valor.

import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [valorSlider, setValorSlider] = useState(250);
  const handleChangeRange = (e) => {
    setValorSlider(e.target.value);
  };
  return (
    <div className="App">
      <h1>Atividade 7</h1>
      <h2>Altere o Range abaixo e veja seu valor!</h2>
      <input
        type="range"
        min={0}
        max={749}
        step={1}
        value={valorSlider}
        onChange={handleChangeRange}
      />
      <p>O valor do Slider é: {valorSlider}</p>
    </div>
  );
}
