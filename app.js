const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3000;
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');

// Usando express.json() para analisar instruções JSON
app.use(express.json());

// Usando bodyParser.urlencoded() para analisar dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando pasta 'public' para servir arquivos estáticos
app.use(express.static('public'));

// Rota específica para os usuários
app.use('/user', userRoutes);


app.get('/', (req, res) => {
    res.render('cadUser');
});

app.listen(port, () => {
    console.log(`Aplicação rodando em: http://localhost:${port}`);
});
