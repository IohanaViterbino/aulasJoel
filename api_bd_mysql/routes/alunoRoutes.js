const express = require('express')
const alunoController = require('../controller/alunoController')

const router = express.Router()

router.post('/newAluno', alunoController.novoAluno)

router.get('/listAllAlunos', alunoController.listarAlunos)

router.get('/buscarAlunoMatricula/:matricula', alunoController.buscarAlunoM)

router.get('/buscarAlunoTurma/:turma', alunoController.buscarAlunoT)

router.get('/apagarAluno/:matricula', alunoController.deletarAluno)

module.exports= router