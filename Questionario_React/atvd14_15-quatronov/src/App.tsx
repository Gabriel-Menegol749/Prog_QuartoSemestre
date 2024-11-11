import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // Função para calcular a diferença de dias
  const calcDate = (data: string) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const selected = new Date(data);
    selected.setHours(0, 0, 0, 0);

    selected.setDate(selected.getDate() + 1); // Adiciona 1 dia para lidar com fuso horário

    const diferencia = selected.getTime() - hoy.getTime();
    const diferencaendias = Math.floor(diferencia / (1000 * 3600 * 24));

    if (diferencaendias > 0) {
      setMensagem(`Faltam ${diferencaendias} dias para essa data.`);
    } else if (diferencaendias === 0) {
      setMensagem(`É Hoje!`);
    } else {
      setMensagem(`Essa data foi a ${Math.abs(diferencaendias)} dias.`);
    }
  };

  // Função para manipular o evento de mudança no campo de data
  const handleDateChange = (event: any) => {
    const date = event.target.value;
    setData(date);
    calcDate(date);
  };

  // Função para manipular a seleção de datas no select
  const handleSelectChange = (event: any) => {
    const selected = event.target.value;
    setSelectedOption(selected);

    let selectedDate = "";
    if (selected === "ano_novo") {
      selectedDate = new Date(new Date().getFullYear(), 0, 1); // 1º de janeiro
    } else if (selected === "haloween") {
      selectedDate = new Date(new Date().getFullYear(), 9, 31); // 31 de outubro
    } else if (selected === "natal") {
      selectedDate = new Date(new Date().getFullYear(), 11, 25); // 25 de dezembro
    }

    // Calcula a diferença de dias para a data selecionada no select
    calcDate(selectedDate);
  };

  return (
    <div className="App">
      <h1>Atividade 14: </h1>
      <h2>Selecione uma data no campo abaixo:</h2>

      <p>A data de hoje é: {new Date().toLocaleDateString()}</p>
      <input type="date" value={data} onChange={handleDateChange} />
      <p>{mensagem}</p>

      <h1>Atividade 15:</h1>
      <h2>
        Escolha nas opções pra saber quantos dias faltam para a data escolhida
      </h2>

      <select name="DataEscolhida" onChange={handleSelectChange}>
        <option value="default">Escolha a data</option>
        <option value="ano_novo">Ano novo</option>
        <option value="haloween">Halloween</option>
        <option value="natal">Natal</option>
      </select>
    </div>
  );
}
