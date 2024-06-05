const Usuario = require('../model/userModel');
const banco = [] //vetor q simula o bd

const userController = {
    criar: (req, res) => {
        const {nome, email, senha} = req.body
        const user = new Usuario(nome, email, senha)
        if(user){
            banco.push(user)
            res.json(user)
        } else{
            res.send("erro")
        }
    },
    listar: (req, res) =>{
        res.json({uNumbers: banco.length, users: banco})
    }
}
module.exports = userController;
module.exports.banco = banco; // Exporta o banco para uso nos testes