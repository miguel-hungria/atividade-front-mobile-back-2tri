const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao meu sistema!</h1><p>Estou feliz em ver alguem aqui. Explore as outras rotas para ver mais sobre a atividade.</p>');
});

app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre a atividade</h1><p>Esta atividade é uma aplicação backend desenvolvida em Node.js e Express, feitra para demonstrar o funcionamento de rotas e comunicação básica em um servidor.</p>');
});

app.get('/equipe', (req, res) => {
    res.send('<h1>Minha Equipe</h1><p>Minha equipe é formada por desenvolvedor esforçado, focado em criar soluções organizadas e fáceis para a web.</p>');
});

app.get('/contato', (req, res) => {
    res.send('<h1>Contato</h1><p>Para entrar em contato, envie um e-mail para miguel.hungria@escolapr.gov.br.</p>');
});

app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(` Servidor rodando com sucesso!`);
    console.log(` Acesse localmente em: http://localhost:${PORT}`);
    console.log(`==================================================`);
    console.log(`Rotas disponíveis:`);
    console.log(` - Inicial: http://localhost:${PORT}/`);
    console.log(` - Sobre:   http://localhost:${PORT}/sobre`);
    console.log(` - Equipe:  http://localhost:${PORT}/equipe`);
    console.log(` - Contato: http://localhost:${PORT}/contato`);
});