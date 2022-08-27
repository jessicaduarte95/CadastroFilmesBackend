const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('cadastrofilmes', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;