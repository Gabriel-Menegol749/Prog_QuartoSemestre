import "./styles.css";
import Count_indiv from "./componentes/count_indiv";
import {BotaoTrocaNum, NumeroGlobTroc} from "./componentes/count_glob";
export default function App() {
  return (
    <div className="App">
      <h1>Contador! Clique nos botões para iniciar a contagem!</h1>

      <h2>Botôes Individuais.</h2>
      <div className="botoesIndividuais">
        <Count_indiv/>
        <Count_indiv/>
        <Count_indiv/>
        <Count_indiv/>
      </div>

      <h2>Botões Globais.</h2>
      <BotaoTrocaNum/>

      <div className="divsGlobais">
        <NumeroGlobTroc/>
        <NumeroGlobTroc/>
        <NumeroGlobTroc/>
        <NumeroGlobTroc/>
      </div>
    </div>
  );
}
