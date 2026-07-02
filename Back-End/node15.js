const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
  { id: 1, nome: 'Miguel' },
  { id: 2, nome: 'Matheus' }
];

let tarefas = [
  { id: 1, titulo: 'Estudar Express', concluida: false },
  { id: 2, titulo: 'Criar um CRUD', concluida: true }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find(item => item.id === id);

  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  res.json(usuario);
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
    nome: req.body.nome
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.patch('/usuarios/:id/nome', (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find(item => item.id === id);

  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  if (!req.body.nome) {
    return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
  }

  usuario.nome = req.body.nome;
  res.json({ mensagem: 'Nome atualizado com sucesso', usuario });
});


app.delete('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const usuarioExiste = usuarios.some(item => item.id === id);

  if (!usuarioExiste) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  usuarios = usuarios.filter(item => item.id !== id);
  res.json({ mensagem: 'Usuário removido com sucesso' });
});


app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(item => item.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  res.json(tarefa);
});

app.post('/tarefas', (req, res) => {
  const novaTarefa = {
    id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
    titulo: req.body.titulo,
    concluida: req.body.concluida || false
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.patch('/tarefas/:id/titulo', (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(item => item.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  if (!req.body.titulo) {
    return res.status(400).json({ mensagem: 'O campo titulo é obrigatório' });
  }

  tarefa.titulo = req.body.titulo;
  res.json({ mensagem: 'Título da tarefa atualizado com sucesso', tarefa });
});

app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const tarefaExiste = tarefas.some(item => item.id === id);

  if (!tarefaExiste) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  tarefas = tarefas.filter(item => item.id !== id);
  res.json({ message: 'Tarefa removida com sucesso' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});