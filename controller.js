const Filmes = require("./Repository");

const inserirFilmes =  async (req,res) => {

    const {name} = req.body;
    const {year} = req.body;
    const {category} = req.body;
    const {sinopse} = req.body;

    console.log(req.body)
    await Filmes.inserirFilmes(name, year, category, sinopse)
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
}

const obterFilmes = async(req, res) => {
    await Filmes.obterFilmes()
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
}

const deletarFilmes = async(req,res) => {
    const {id} = req.params;
    await Filmes.deletarFilmes(id)
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
}

const editarFilmes = async(req, res) => {
    console.log(req.body)
    
    const {name} = req.body;
    const {year} = req.body;
    const {category} = req.body;
    const {sinopse} = req.body;
    const {id} = req.params

    await Filmes.editarFilmes(name, year, category, sinopse, id)
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
}

module.exports = {
    inserirFilmes,
    obterFilmes,
    deletarFilmes,
    editarFilmes
}