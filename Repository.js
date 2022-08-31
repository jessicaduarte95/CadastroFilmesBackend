const Cadastro = require('./model');

const inserirFilmes = async (name, year, category, sinopse) => {
    try {
        const insert =  await Cadastro.create({
            title: name,
            year: year,
            category: category,
            sinopse: sinopse
        })
        console.log(insert);
    } catch (error) {
        console.log(error);
    }
    console.log("Repository")
}

module.exports = {
    inserirFilmes
}