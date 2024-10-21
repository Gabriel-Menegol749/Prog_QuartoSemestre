import "../sheets/estilizacaoBotoes.css";

export function BotaoLaranj ({ onClick }: { onClick: () => void }){
    return(
        <button className="botaoLaranj" onClick={onClick}> Botão Laranja</button>
    )
}

export function BotaoVerm ({ onClick }: { onClick: () => void }){
    return(
        <button className="botaoVerm" onClick={onClick}> Botão Vermelho</button>
    )
}

export function BotaoVerd ({ onClick }: { onClick: () => void }){
    return(
        <button className="botaoVerd" onClick={onClick}> Botão Verde</button>
    )
}

export function BotaoAzul({ onClick }: { onClick: () => void }){
    return(
        <button className="botaoAzul" onClick={onClick}> Botão Azul</button>
    )
}
