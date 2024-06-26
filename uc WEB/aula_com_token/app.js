const express = require('express');
const cookieParser = require('cookie-parser'); //acessar aos cookie de sessão, para guardar a senha do token
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cookieParser());

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', './views'); //optativo pois funciona só com o de cima

// Rotas relacionadas aos usuários
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});