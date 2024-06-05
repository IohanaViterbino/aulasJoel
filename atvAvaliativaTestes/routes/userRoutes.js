const express = require('express');
const usuarioController = require('../controller/userController');
const router = express.Router()

router.get('/listar', usuarioController.listar)

router.post('/criarUser', usuarioController.criar)

module.exports = router;