const express = require('express');
const usuarioController = require('../controller/userController');
const router = express.Router()

router.get('/', usuarioController.home)

router.get('/criarUser', usuarioController.formCadastro)

router.get('/listar', usuarioController.listar)

router.post('/criar', usuarioController.criar)

module.exports = router;