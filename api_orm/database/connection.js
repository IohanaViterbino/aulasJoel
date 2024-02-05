const Sequelize = require('sequelize');
const sequelize = new Sequelize('escola_bd', 'root', 'usbw', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;