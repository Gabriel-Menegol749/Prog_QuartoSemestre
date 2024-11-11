//Atividade 12:Crie um seletor de arquivo para envio de uma foto de
//perfil. Limite os arquivos enviados a imagens e mostre a imagem enviada na tela.


import "./styles.css";
import React, { useState } from "react";

export default function App() {

  const [img, setImg] = useState<string | null>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    if(file && file.type.startsWith ("image/")){
      const leitor = new FileReader();

      leitor.onloadend = () => {
        setImg(leitor.result as string); 
      };

      leitor.readAsDataURL(file);
    } else {
      alert("O leitor aceita apenas imagens, por favor, insira um arquivo do tipo imagem ('jpg, png, etc')")
    }
  }
  return (
    <div className="App">
      <h1>Atividade 12:</h1>
      <h2>
        Adicione uma foto de perfil no seletor de imagens abaixo!
      </h2>

      <div className="fotoExemplo">
        <label htmlFor="fotoEx">Caso não tenha uma foto de perfil, baixe está que está no link abaixo!</label>
        <a href="/fotoPerfil/fotoPerfilEx.png" download="fotoPerfilEx.png"> Foto Perfil!</a>

        <input type="file" accept="image/*" onChange={handleImageChange}/>
      </div>

      <div className="fotoPROFILE">
        {img && <img src={img} alt="" width="300px" height="300px"/>}
      </div>
    </div>
  );

};