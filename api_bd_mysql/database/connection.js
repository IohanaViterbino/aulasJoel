const knex = require('knex')({
    
    client: 'mysql2',
    connection:{
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'escola_bd'
    }
})

module.exports = knex;