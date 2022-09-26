const express = require("express");
const app = express();
const cors = require("cors");
const Filmes = require("./Controller");

app.use(cors());
app.use(express.json());

app.post("/cadastrar", Filmes.inserirFilmes);

app.get("/filmesCadastrados", Filmes.obterFilmes);

app.delete("/deletarFilme/:id", Filmes.deletarFilmes);

app.put("/editarfilme/:id", Filmes.editarFilmes)

app.get('/', (req,res) => {
    res.send("Teste");
})

app.listen(5000, () => {
    console.log("Servidor Rodando!");
})
