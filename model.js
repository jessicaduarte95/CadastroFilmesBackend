const Sequelize = require('sequelize');
const database = require('./db');

const Cadastro = database.init('cadastrofilmes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.STRING
    },
    sinopse: {
        type: Sequelize.STRING
    }
})

module.exports = Cadastro;