const Filmes = require("./Repository");
const Cadastro = require('./model');

const inserirFilmes =  async (req,res) => {

    const {name} = req.body;
    const {year} = req.body;
    const {category} = req.body;
    const {sinopse} = req.body;

    console.log(req.body)
    await Filmes.inserirFilmes(name, year, category, sinopse);
}

const obterFilmes = async(req, res) => {
    const obter = await Cadastro.findAll()
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
}

module.exports = {
    inserirFilmes,
    obterFilmes
}