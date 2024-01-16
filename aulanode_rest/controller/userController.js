
const Usuario = require('../model/userModel');
const { use } = require('../routes/userRoutes');
const banco = [] //vetor q simula o bd

const userController = {

    home: (req, res) => {
        res.send('Oilá, tudo pom?')
    },

    criar: (req, res) => {
        const {nome, email, senha} = req.body
        const user = new Usuario(nome, email, senha)
        if(user){
            res.json(user)
            banco.push(user)
        } else{
            res.send("erro")
        }
        console.log(user)
    },

    formCadastro: (req, res) => {
        res.render('cadUser')
    },

    listar: (req, res) =>{
        res.render('listarUsers', {users: banco})
    }
}
module.exports = userController;