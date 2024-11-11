//Atividade 4: Crie um formulário de login que valida o formato do e-mail
//digitado e a quantidade de dígitos na senha, mostrando mensagens
//de erro específicas caso haja um problema na validação.

//Atividade 5: Adicione um botão de limpar formullário (reset) no exercício anterior.

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [ocultarSenha, setOcultarSenha] = useState(false);

  function Validação(evt) {
    evt.preventDefault();
    setOcultarSenha(false);

    const regexEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const regexSenha =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%])[A-Za-z\d@#%]{4,20}$/;
    //primeira validação, ver se os campos estão vazios, se sim aparece a mensagem de erro
    if (email === "" || senha === "") {
      setMensagemErro("Todos os campos são Obrigatórios!");
      return;
    }
    //validação email
    if (!regexEmail.test(email)) {
      setMensagemErro("O email deve ser no formato 'seuemail@gmail.com");
      return;
    }
    //validação senha
    if (!regexSenha.test(senha)) {
      setMensagemErro("A senha não está conforme o formato!");
      return;
    }

    setMensagemErro("Login realizado com sucesso!");
  }
  return (
    <div className="App">
      <h1>Atividade 4 & 5: Formulário.</h1>
      <h2>Faça Login no sistema!</h2>

      <form action="" className="formurario" onSubmit={Validação}>
        <input
          type="text"
          className="email"
          placeholder="Digite seu email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <section className="senha">
          <input
            type={ocultarSenha ? "text" : "password"}
            className="senhaInput"
            placeholder="Digite sua senha:"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            className="revelaSenha"
            type="button"
            onClick={() => setOcultarSenha(!ocultarSenha)}
          >
            {ocultarSenha ? "🙈" : "👁️"}
          </button>
        </section>

        <input type="submit" className="enviar" />

        <input
          type="button"
          className="resetar"
          value="Limpar Campos"
          onClick={() => {
            setEmail("");
            setSenha("");
            setMensagemErro("");
            setOcultarSenha(false);
          }}
        />

        <p className="mensagem_deErro">{mensagemErro}</p>
      </form>

      <div className="instrucoes">
        <h2>Instruções</h2>
        <p>O email deve ter o formato "seuUsuario@gmail.com"</p>
        <p>A senha deve ter:</p>
        <li>No mínimo 4 digitos e no máximo 20</li>
        <li>Uma letra Minuscula e uma Maiuscula</li>
        <li>No minimo um Número</li>
        <li>Um caracter especial (@, %, #, etc...)</li>
      </div>
    </div>
  );
}
