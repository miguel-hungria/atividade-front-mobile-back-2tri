const express = require('express');
const app = express();

const usuarios = [
  'Miguel',
  'Dani',
  'mathues'
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

const tarefas = [
      'Matematica',
      'ciencias',
      'Programação mobile'
];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

const reservas = [
    'Biblioteca',
    'Quadra de esportes',
    'Laboratorio de informatica'
];

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

const mensagem = [
    'sistema ativo',
];

app.get('/mensagem', (req, res) => {
  res.json(mensagem);
});

const turmas = [
    '3t',
    '3n',
    '3q'
];

app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(3000, () => {
  console.log('Servidor arrasando');
});