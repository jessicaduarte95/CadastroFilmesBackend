const express = require("express");
const app = express();
const Cadastro = require('./model');



// try {
//     const insert =  Cadastro.create({
//         title: "Titanic",
//         year: 1998,
//         category: "Drama/ Romance",
//         sinopse: "Teste Sinopse"
//     })
//     console.log(insert)
// } catch (error) {
//     console.log(error);
// }


app.get('/', (req,res) => {
    res.send("Teste")
})

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})
