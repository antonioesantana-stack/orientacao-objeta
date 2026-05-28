import { useState } from 'react';
import "./App.css";

function App() {
  const [formValores, setFormValores] = useState({
    nome: '',
    idade: '',
    cpf: ''
  });

  const handleChange = (e) => {
    setFormValores({
      ...formValores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Dados a serem enviados:", formValores);

      const response = await fetch('http://localhost:3000/cadastrarPessoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });

      const json = await response.json();

      console.log(response);
      console.log(json);

      // --- NOVIDADE AQUI ---
      // Se a resposta do servidor for de sucesso (status entre 200 e 299)
      if (response.ok) {
        // Exibe o alerta na tela com a mensagem vinda do backend ("Pessoa cadastrada com sucesso")
        alert(`Sucesso: ${json.mensagem}!`);
        
        // Opcional: Limpa o formulário depois que a pessoa clica em "OK"
        setFormValores({ nome: '', idade: '', cpf: '' });
      } else {
        alert("Houve um problema ao cadastrar.");
      }
      // ----------------------

    } catch (err) {
      console.error("Erro ao enviar", err);
      alert("Não foi possível conectar ao servidor. Verifique se o backend está ligado!");
    }
  };

  return (
    <div className="App">
      <h1>Cadastro de Pessoa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formValores.nome}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={formValores.idade}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formValores.cpf}
          onChange={handleChange}
        />
        <br />
        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default App;