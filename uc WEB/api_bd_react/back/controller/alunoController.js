const db = require('../database/connection')

const alunoControler = {
    //render do front
    formCadastro: (req, res)=>{
        res.render('cadastroAluno')
    },
    formEditarAluno: (req,res)=>{
        const id = req.params
        db.select("*").table("alunos").where({matricula: id.matricula}).then(data =>{ 
            res.render('editarAluno', {data})
        }).catch(error=>{
            res.json(error)
        })
    },
    formDeletarAluno: (req,res)=>{
        const id = req.params
        db.select("*").table("alunos").where({matricula: id.matricula}).then(data =>{ 
            res.render('apagarAluno', {data})
        }).catch(error=>{
            res.json(error)
        })
    },
    listarAlunos: (req, res)=> {
        db.select("*").table("alunos").then(data =>{ 
            //data equivale aos alunos listados do bd
            res.json(data)
            // res.render('listarAlunos', {alunos:data})
        }).catch(error=>{
            res.json(error)
        })
    },
    novoAluno:(req, res)=> {
        const {matricula, nome, email, data_nascimento, turma, fone, sexo} = req.body

        db.insert({matricula, nome, email, data_nascimento, turma, fone, sexo}).table("alunos").then(data =>{
            res.json({message: 'aluno salvo com sucesso'})
        }).catch(error =>{
            res.json(error)
        })
    },
    buscarAlunoM: (req, res)=> {
        const id = req.params
        db.select("*").table("alunos").where({matricula: id.matricula}).then(data =>{ 
            res.json(data)
        }).catch(error=>{
            res.json(error)
        })
    },
    buscarAlunoT: (req, res)=> {
        const id = req.params
        db.select("*").table("alunos").where({turma: id.turma}).then(data =>{ 
            res.json(data)
        }).catch(error=>{
            res.json(error)
        })
    },
    deletarAluno: (req, res)=> {
        const id = req.params
        db.delete("*").table("alunos").where({matricula: id.matricula}).then(data =>{ 
            res.json({message: 'aluno apagado com sucesso'})
        }).catch(error=>{
            res.json(error)
        })
    },
    editarAluno:(req, res) =>{
        const id = req.params
        const {nome, email, data_nascimento, turma, fone, sexo} = req.body
        db.where({matricula:id.matricula}).update({nome, email, data_nascimento, turma, fone, sexo}).table("alunos").then(data =>{ 
            res.json({message: 'registro do aluno atualzado com sucesso'})
        }).catch(error=>{
            res.json(error)
        })
    }
}

module.exports = alunoControler