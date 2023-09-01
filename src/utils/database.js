const { Sequelize } = require('sequelize')
const config = require('../config')

const db = new Sequelize({
    dialect: 'mssql',
    host: config.db.host, //? Variable de entorno del host
    username: config.db.username, //? Variable de entorno del usuario
    password: config.db.password, //? Variable de entorno de la contraseña
    database: config.db.dbName,
    define: {
        freezeTableName: true, // Esto evitará la pluralización automática
      }, //? Variable de entorno de la base de datos
    dialectOptions: process.env.NODE_ENV === 'production'
    ?{
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    } : {}
})


module.exports = db