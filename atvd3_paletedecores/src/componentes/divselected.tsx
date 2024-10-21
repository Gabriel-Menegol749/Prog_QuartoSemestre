import React from "react";
import "../sheets/divselect.css";

interface divSelectedProps{
    cor: string;
}


export function DivSelected ({cor}: {cor: string}){
    return(
        <div className="divCores" id="divCores" style={{backgroundColor: cor}}>
            Esse quadro troca de cor! Clique em algum dos botões acima!
        </div>
    )
}