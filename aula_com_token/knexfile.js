// Update with your config settings.

require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  client: 'mysql2',
  connection: {
     host: process.env.DB_HOST, //'localhost', //por padrão localhost
        user:process.env.DB_USER,  //'root', //por padrão root
        password:process.env.DB_PASSWORD,  //'usbw', //sua senha definida
        database: process.env.DB_NAME, //'escola_bd',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
};
