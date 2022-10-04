const res = require('express/lib/response');
const Cadastro = require('./model');

const inserirFilmes = async (name, year, category, sinopse) => {
    try {
        await Cadastro.create({
            title: name,
            year: year,
            category: category,
            sinopse: sinopse
        })
    } catch (error) {
        console.log(error);
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
    try{
        await Cadastro.destroy({
            where: {Id: id}
        })
    } catch (error) {
        console.log(error);
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