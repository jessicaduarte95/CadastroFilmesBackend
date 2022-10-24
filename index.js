const express = require("express");
const app = express();
const cors = require("cors");
const Filmes = require("./controller");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.post("/cadastrar", Filmes.inserirFilmes);

app.get("/filmesCadastrados", Filmes.obterFilmes);

app.delete("/deletarFilme/:id", Filmes.deletarFilmes);

app.put("/editarfilme/:id", Filmes.editarFilmes)

app.get("/terms", (req,res) => {
    return res.json({
        message: "Termos de Serviço."
    });
});

app.get('/', (req,res) => {
    res.send("Teste");
})

app.listen(5000, () => {
    console.log("Servidor Rodando!");
})
