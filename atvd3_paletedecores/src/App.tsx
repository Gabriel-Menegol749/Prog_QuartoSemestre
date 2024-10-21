import "./styles.css";
import React from "react";
import { useState } from "react";

import {
  BotaoLaranj,
  BotaoVerm,
  BotaoVerd,
  BotaoAzul
} from "./componentes/botoes";

import {DivSelected} from "./componentes/divselected";

export default function App() {
  const [cor, setCor] = useState<string>("grey");

  function corLaranj (){
    setCor("orange");
  }
  function corVermei (){
    setCor("red");
  }
  function corVerd (){
    setCor("green");
  }
  function corAzul (){
    setCor("blue");
  }
  return (
    <div className="App">
      <h1>Div que troca de cor!</h1>


      <div className="buttons">
          <BotaoLaranj onClick={corLaranj}/>
          <BotaoVerm onClick={corVermei}/>
          <BotaoVerd onClick={corVerd}/>
          <BotaoAzul onClick={corAzul}/>
      </div>

      <DivSelected cor={cor}/>
    </div>
  );
}

