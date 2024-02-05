// const db = require('../database/connection')
const Aluno = require('../model/aluno')

const alunoControler = {
    //render do front
    formCadastro: (req, res)=>{
        res.render('cadastroAluno')
    },
    formEditarAluno: (req,res)=>{
        const id = req.params.matricula;

        Aluno.findByPk(id)
        .then(aluno => {
            if (aluno) {
                console.log(aluno)
                res.render('editarAluno', { aluno });
            } else {
                res.status(404).json({ message: 'Aluno não encontrado' });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });

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
        Aluno.findAll().then(data =>{
            res.render('listarAlunos', {alunos:data})
        }).catch(error=>{
            res.json(error)
        })
    },
    novoAluno:(req, res)=> {
        const { matricula, nome, email, data_nascimento, turma, fone, sexo } = req.body;

        Aluno.create({
            matricula,
            nome,
            email,
            data_nascimento,
            turma,
            fone,
            sexo,   
        })
        .then((aluno) => {
            res.json({ message: 'Aluno salvo com sucesso', aluno });
        })
        .catch((error) => {
            res.json({ error });
        });

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
        const id = req.params.matricula;
        const { nome, email, data_nascimento, turma, fone, sexo } = req.body;

        Aluno.update(
        { nome, email, data_nascimento, turma, fone, sexo },
        { where: { matricula: id } }
        )
        .then(() => {
            res.json({ message: 'Registro do aluno atualizado com sucesso' });
        })
        .catch((error) => {
            res.json(error);
        });

    }
}

module.exports = alunoControler