const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');

// Usando express.json() para analisar instruções JSON
app.use(express.json());
// Usando bodyParser.urlencoded() para analisar dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));
// Rota específica para os usuários
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Aplicação rodando em: http://localhost:${port}`);
});

module.exports = app; // Exporta o app para uso nos testes