const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


let avisos = [{ id: 1, titulo: "Aviso inicial do servidor" }];


app.post('/enviar', (req, res) => {
  const { tipo, conteudo } = req.body;
  

  const novoAviso = { id: avisos.length + 1, titulo: `${tipo}: ${conteudo}` };
  avisos.push(novoAviso);

  res.status(201).json({ mensagem: `${tipo} enviado com sucesso!` });
});


app.get('/avisos', (req, res) => {
  res.json(avisos);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));