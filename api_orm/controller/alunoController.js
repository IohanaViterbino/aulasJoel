// const db = require('../database/connection')
const Aluno = require('../model/aluno')

const alunoControler = {
    formCadastro: (req, res)=>{
        res.render('cadastroAluno')
    },

    formEditarAluno: (req,res)=>{
        const id = req.params.matricula;

        Aluno.findAll({ where: { matricula: id }}).then(data => {
            if (data) {
                console.log(data)
                res.render('editarAluno', {aluno: data});
            } else {
                res.status(404).json({ message: 'Aluno não encontrado' });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });

    },

    formDeletarAluno: (req,res)=>{
        const id = req.params.matricula;

        Aluno.findAll({ where: { matricula: id }}).then(data =>{ 
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
        const id = req.params.matricula
        Aluno.findAll({ where: { matricula: id }}).then(data =>{ 
            res.json(data)
        }).catch(error=>{
            res.json(error)
        })
    },
    buscarAlunoT: (req, res)=> {
        const id = req.params.turma
        Aluno.findAll({ where: { turma: id }}).then(data =>{ 
            res.json(data)
        }).catch(error=>{
            res.json(error)
        })
    },
    deletarAluno: (req, res)=> {
        const id = req.params.matricula;

        Aluno.destroy({where: {matricula: id}})
        .then(() => {
            res.json({ message: 'Aluno apagado com sucesso' });
        })
        .catch((error) => {
            res.json(error);
        });

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