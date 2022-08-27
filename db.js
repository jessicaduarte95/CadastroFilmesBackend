const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('cadastrofilmes', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  });

  module.exports = sequelize;