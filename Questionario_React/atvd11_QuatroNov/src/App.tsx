//Atividade 11: Crie um seletor de arquivo
//e mostre na tela as informações do arquivo enviado.

import "./styles.css";
import React, { useState } from "react";

interface fileInfo{
  name: string;
  size: number;
  type: string;
}


export default function App() {
  const [fileReader, setFileReader] = useState<fileInfo | null>(null);
  const handleFileChange = (event: any) => {
    const uploadedFIle = event.target.files ? event.target.files[0] : null;
    if(uploadedFIle){
      setFileReader({
        name: uploadedFIle.name,
        size: uploadedFIle.size,
        type: uploadedFIle.type,
      });
    }
  };

  return (
    <div className="App">
      <h1>Atividade 11</h1>
      <h2>
        Baixe algum dos arquivos abaixo, e faça upload no Leitor de Documentos
        abaixo!
      </h2>
      <section className="arquivos">

          <a href="/itens_download/arquivoExPDF.pdf" download="arquivoExPDF.pdf">Arquivo.PDF</a>
          <a href="/itens_download/arquivoExPNG.png" download="arquivoExPNG.png">Arquivo.PNG</a>
          <a href="/itens_download/arquivoExTXT.txt" download="arquivoExTXT.txt">Arquivo.TXT</a>

      </section>

      <section className="leitor_DOC">
        <label htmlFor="fileReader">Leitor de Documentos: </label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="fileReader"
        />
      </section>

      {fileReader && (
        <section className="file-info">
          <h3>Informações do arquivo:</h3>
          <p><strong>Nome:</strong> {fileReader.name}</p>
          <p><strong>Tamanho:</strong> {(fileReader.size / 1024).toFixed(2)} KB</p>
          <p><strong>Tipo:</strong> {fileReader.type}</p>
        </section>
      )}
    </div>
  );
}
