require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const character = require('./models/Character')
/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.
*/
//URL ----> 
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

//Debajo de este comentario puedes ejecutar la función de los modelos.

character(sequelize);

module.exports = {
   ...sequelize.models,
   sequelize,
};
