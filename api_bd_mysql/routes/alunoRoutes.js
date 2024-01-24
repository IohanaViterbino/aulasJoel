const express = require('express')
const override = require('method-override')
const alunoController = require('../controller/alunoController')

const router = express.Router()
router.use(override('_method'))

//back
router.post('/newAluno', alunoController.novoAluno)

router.get('/listAllAlunos', alunoController.listarAlunos)
router.get('/buscarAlunoMatricula/:matricula', alunoController.buscarAlunoM)
router.get('/buscarAlunoTurma/:turma', alunoController.buscarAlunoT)

router.delete('/apagarAluno/:matricula', alunoController.deletarAluno)

router.put('/editarAluno/:matricula', alunoController.editarAluno)

//render front
router.get('/cadastroAluno', alunoController.formCadastro)
router.get('/editarAluno/:matricula', alunoController.formEditarAluno)
router.get('/apagarAluno/:matricula', alunoController.formDeletarAluno)

module.exports= router