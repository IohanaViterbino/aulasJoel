const Sequelize = require('sequelize');
const db = require('../database/connection');

const Aluno = db.define('Aluno', {
    matricula: {
        type: Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    turma: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fone: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING(1),
        allowNull: false
    }
}, {
    timestamps: true, // Adiciona colunas createdAt e updatedAt automaticamente
});

module.exports = Aluno;
