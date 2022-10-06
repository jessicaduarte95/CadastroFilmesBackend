const res = require('express/lib/response');
const Cadastro = require('./model');
const sequelize = require('./db')

const inserirFilmes = async (name, year, category, sinopse) => {
    const t = await sequelize.transaction()
    try {
        await Cadastro.create({
            title: name,
            year: year,
            category: category,
            sinopse: sinopse
        }, { transaction: t })

        await t.commit();

    } catch (error) {
        console.log(error)
        await t.rollback();
    }
}

const obterFilmes = async () => {
    try {
        const obter = await Cadastro.findAll()
        return obter;
    }catch (error) {
        console.log(error)
    }
}

const deletarFilmes = async (id) => {
    const t = await sequelize.transaction()
    try{
        await Cadastro.destroy({
            where: {Id: id}
        }, { transaction: t })

        await t.commit();

    } catch (error) {
        console.log(error);
        await t.rollback();
    }
}

const editarFilmes = async (name, year, category, sinopse, id) => {
    try{
        await Cadastro.update(
            {title: name, 
            category: category,
            sinopse: sinopse,
            year: year},
            {where: {Id: id}}
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    inserirFilmes,
    obterFilmes,
    deletarFilmes,
    editarFilmes
}