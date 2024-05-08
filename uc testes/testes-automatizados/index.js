import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
const { dirname } = path;
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const users = {
    admin: 'password',
    flavio: '123'
}

app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    console.log(username, password)
    if(users[username] === password){
        res.json({sucess: true, message: 'Login realizado com sucesso'});
    }else{
        res.json({sucess: false, message: 'Login invalido.'});
    }
})

app.get('/cadastro', (req, res) =>{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'public', 'cadastro.html');
    res.sendFile(filePath);
})

app.post('/cadastro', (req, res) =>{
    const {username, email, password} = req.body;
        users[username] = password;
        // res.json({sucess: true, message: 'Cadastro realizado com sucesso'});
        res.redirect('http://localhost:3000')
})

app.listen(PORT, () => {
	console.log(`Running on PORT http://localhost:${PORT}`);
})
