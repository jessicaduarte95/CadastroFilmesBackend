const express = require("express");
const app = express();
const Cadastro = require('./model');
const cors = require("cors");

app.use(cors());
app.use(express.json())

app.post("/cadastrar", (req,res) => {

    const {name} = req.body;
    const {year} = req.body;
    const {category} = req.body;
    const {sinopse} = req.body;

    console.log(req.body)

    try {
        const insert =  Cadastro.create({
            title: name,
            year: year,
            category: category,
            sinopse: sinopse
        })
        console.log(insert)
    } catch (error) {
        console.log(error);
    }
})


app.get('/', (req,res) => {
    res.send("Teste")
})

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})
