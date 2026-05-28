import express from 'express';
import cors from 'cors';
import Pessoa from './Pessoa.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/cadastrarPessoa', (req, res) => {
  
  const { nome, idade, cpf } = req.body;

  // criando objeto da classe
  const novaPessoa = new Pessoa(
    nome,
    idade,
    cpf
  );

  // utilizando método da classe
  novaPessoa.mostrarDetalhes();

  res.status(201).json({
    mensagem: 'Pessoa cadastrada com sucesso',
    pessoa: {
      nome: novaPessoa.nome,
      idade: novaPessoa.idade,
      cpf: novaPessoa.cpf
    }
  });

});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});