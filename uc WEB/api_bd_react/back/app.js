const express = require('express')
const cors = require('cors')
const router = require('./routes/alunoRoutes')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use('/alunos', router)


app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})

module.exports = app;