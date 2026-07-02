const express = require('express');
const app = express();

app.use(express.json());

app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  res.status(201).json({
    mensagem: 'Usuário recebido com sucesso',
    usuario: novoUsuario
  });
});

app.post('/avisos', (req, res) => {
  const novoAviso = req.body;
  res.status(201).json({
    mensagem: 'Aviso recebido com sucesso',
    aviso: novoAviso
  });
});

app.post('/tarefas', (req, res) => {
  const novaTarefa = req.body;
  res.status(201).json({
    mensagem: 'Tarefa recebida com sucesso',
    tarefa: novaTarefa
  });
});

app.post('/reservas', (req, res) => {
  const novaReserva = req.body;
  res.status(201).json({
    mensagem: 'Reserva recebida com sucesso',
    reserva: novaReserva
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: "Estudar Express",
      descricao: "Criar rotas POST para a API",
      prazo: "2026-07-05"
    })
  })
  .then(resposta => resposta.json())
  .then(dados => console.log(dados));