//Atividade: Crie dois campos de horário e
//calcule quantos minutos de diferença existem
//entre os valores selecionados.

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [horario1, setHorario1] = useState("");
  const [horario2, setHorario2] = useState("");
  const [dif, setDIF] = useState(null);

  const calcDIF = () => {
    if (horario1 && horario2) {
      const [horas1, minutos1] = horario1.split(":").map(Number);
      const [horas2, minutos2] = horario2.split(":").map(Number);

      const totmin1 = horas1 * 60 + minutos1;
      const totmin2 = horas2 * 60 + minutos2;

      const difMint = Math.abs(totmin1 - totmin2);
      setDIF(difMint);
    }
  };
  return (
    <div className="App">
      <h1>Atividade 16:</h1>
      <h2>
        Coloque nos inputs abaixo, dois horários, e veja a diferença entre eles!
      </h2>

      <input
        type="time"
        value={horario1}
        onChange={(e) => setHorario1(e.target.value)}
      />
      <input
        type="time"
        value={horario2}
        onChange={(e) => setHorario2(e.target.value)}
      />
      <button onClick={calcDIF}>Calcule!</button>
      <p>
        {dif !== null
          ? `A diferença é ${dif} minutos`
          : `Insira o horário nos dois campos`}
      </p>
    </div>
  );
}
