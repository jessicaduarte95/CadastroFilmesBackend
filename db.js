const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('cadastroFilmes', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;