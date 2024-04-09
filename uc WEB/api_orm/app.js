const express = require('express')
const cors = require('cors')
const router = require('./routes/alunoRoutes')
const app = express()
const port = 3000
const db = require('./database/connection');

app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use('/alunos', router)

db.sync()
  .then(() => {
    console.log('Tabela criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar a tabela:', error);
  });

app.get('/', (req, res) =>{
    // res.send('Hello')
    res.render('index')
})  

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
})