const Filmes = require("./Repository");

const inserirFilmes =  async (req,res) => {

    const {name} = req.body;
    const {year} = req.body;
    const {category} = req.body;
    const {sinopse} = req.body;

    console.log(req.body)
    await Filmes.inserirFilmes(name, year, category, sinopse);
}

module.exports = {
    inserirFilmes
}