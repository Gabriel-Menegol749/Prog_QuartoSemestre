import "./styles.css";
import { useState } from "react";
import { Num1, Num2 } from "./Componentes/Inputs";
import {
  Adicionar,
  Diminuir,
  Dividir,
  Multiplicar,
} from "./Componentes/Calculos";

export default function App() {
  // Correção na forma de usar o useState
  const [num1, setNum1] = useState(0); // Inicializa num1 com 0
  const [num2, setNum2] = useState(0); // Inicializa num2 com 0
  const [resultado, setResultado] = useState(null); // Inicializa resultado como null

  return (
    <div className="App">
      <h1>Calculadora!</h1>
      <p>Digite os números e clique em um dos botões de operação.</p>
      {/* Inputs para num1 e num2 */}
      <Num1 value={num1} setValue={setNum1} />
      <br />
      <Num2 value={num2} setValue={setNum2} />
      <br /> <br />
      {/* Botões de operações */}
      <button onClick={() => setResultado(Adicionar(num1, num2))}>+</button>
      <button onClick={() => setResultado(Diminuir(num1, num2))}>-</button>
      <button onClick={() => setResultado(Dividir(num1, num2))}>/</button>
      <button onClick={() => setResultado(Multiplicar(num1, num2))}>x</button>
      <br />
      <br />
      {/* Exibição do resultado */}
      <p>
        Resultado:{" "}
        {resultado !== null ? resultado : "Nenhum cálculo realizado!"}
      </p>
    </div>
  );
}
