const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send("Teste")
})

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})
