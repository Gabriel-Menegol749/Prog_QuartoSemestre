//Atividade 10:Combine os exercícios anteriores
//para que alterações nos sliders sejam refletidas
//no seletor de cor e vice-versa.

import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [red, setRED] = useState(0);
  const [green, setGREEN] = useState(0);
  const [blue, setBLUE] = useState(0);
  const [cor, setCor] = useState("#000000");

  //converte RGB para Hexadecimal
  const rgb_paraHEX = (r, g, b) => {
    const paraHEX = (n) => {
      const hexaDecimal = n.toString(16);
      return hexaDecimal.length === 1 ? "0" + hexaDecimal : hexaDecimal;
    };
    return "#" + paraHEX(r) + paraHEX(g) + paraHEX(b);
  };
  useEffect(() => {
    setCor(rgb_paraHEX(red, green, blue));
  }, [red, green, blue]);

  useEffect(() => {
    const hexParaDec = (hexaDecimal: string) => {
      const r = parseInt(hexaDecimal.slice(1, 3), 16);
      const g = parseInt(hexaDecimal.slice(3, 5), 16);
      const b = parseInt(hexaDecimal.slice(5, 7), 16);

      return { r, g, b };
    };

    const { r, g, b } = hexParaDec(cor);
    setRED(r);
    setGREEN(g);
    setBLUE(b);
  }, [cor]);

  return (
    <div className="App">
      <h1>Atividade 10: </h1>
      <h2>
        Altere o valor dos sliders para ver a cor no input, ou vice-versa!
      </h2>

      <div className="sliders">
        <label htmlFor="sliderRed">Vermelho: {red}</label>
        <input
          type="range"
          className="sliderRed"
          min={0}
          max={255}
          value={red}
          onChange={(e) => setRED(Number(e.target.value))}
        />

        <label htmlFor="sliderGreen">Verde: {green}</label>
        <input
          type="range"
          className="sliderGreen"
          min={0}
          max={255}
          value={green}
          onChange={(e) => setGREEN(Number(e.target.value))}
        />

        <label htmlFor="sliderBlue">Azul: {blue} </label>
        <input
          type="range"
          className="sliderBlue"
          min={0}
          max={255}
          value={blue}
          onChange={(e) => setBLUE(Number(e.target.value))}
        />
      </div>

      <p>O valor em hexadecimal da cor é: {cor}</p>

      <input
        type="color"
        className="inputColor"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
      />
    </div>
  );
}
