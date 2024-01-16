const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('public'))

app.get('/contato', (req, res) => {
  res.send('Hello Worlduru!')
})

app.get('/', (req,res) =>{
    const caminhoArquivoHTML = path.join(__dirname, 'index.html');
    res.sendFile(caminhoArquivoHTML)
})

app.get('/teste', (req,res) =>{
    res.send('Nodemon')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})