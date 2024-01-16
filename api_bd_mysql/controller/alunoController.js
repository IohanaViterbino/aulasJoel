const db = require('../database/connection')

const alunoControler = {

    novoAluno:(req, res)=> {
        const {matricula, nome, email, data_nascimento, turma, fone, sexo} = req.body

        db.insert({matricula, nome, email, data_nascimento, turma, fone, sexo}).table("alunos").then(data =>{
            console.log(data)
            res.json({message: 'aluno salvo com sucesso'})
        }).catch(error =>{
            console.log(error)
        })
    },
    listarAlunos: (req, res)=> {
        db.select("*").table("alunos").then(data =>{ 
            //data equivale aos alunos listados do bd
            console.log(data)
            res.json(data)
        }).catch(error=>{
            console.log(error)
        })
    },
    buscarAlunoM: (req, res)=> {
        const id = req.params
        console.log(id)
        db.select("*").table("alunos").where({matricula: id.matricula}).then(data =>{ 
            console.log(data)
            res.json(data)
        }).catch(error=>{
            console.log(error)
        })
    },
    buscarAlunoT: (req, res)=> {
        const id = req.params
        console.log(id)
        db.select("*").table("alunos").where({turma: id.turma}).then(data =>{ 
            console.log(data)
            res.json(data)
        }).catch(error=>{
            console.log(error)
        })
    },
    deletarAluno: (req, res)=> {
        const id = req.params
        console.log(id)
        db.delete("*").table("alunos").where({matricula: id.matricula}).then(data =>{ 
            console.log('apagou')
            res.json({message: 'aluno apagado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

}

module.exports = alunoControler