const express = require("express");
const app = express();
const cors = require("cors");
const Filmes = require("./Repository");

app.use(cors());
app.use(express.json())

app.post("/cadastrar", (req,res) => {

    const {name} = req.body;
    const {year} = req.body;
    const {category} = req.body;
    const {sinopse} = req.body;

    console.log(req.body)
    Filmes.inserirFilmes(name, year, category, sinopse);

})


app.get('/', (req,res) => {
    res.send("Teste")
})

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})
