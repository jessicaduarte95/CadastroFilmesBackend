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

const obterFilmes = async (req,res) => {
    // try {
    //     const obter = await Cadastro.findAll({})
    //     .then((response) => console.log({response}), data = obter)
    // } catch (error) {
    //     console.log("Erro: " + error)
    // }
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

module.exports = {
    inserirFilmes,
    obterFilmes,
    deletarFilmes
}