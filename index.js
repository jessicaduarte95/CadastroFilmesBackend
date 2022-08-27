const express = require("express");
const app = express();

// app.get('/', (req,res) => {
//     res.send("Teste")
// })


(async () => {
    const database = require('./db');
    // const Cadastro = require('./model');
 
    try {
        const resultado = await database.sync();
        console.log("Testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + resultado);
    } catch (error) {
        console.log("Nada de errooooooooooooo" + error);
    }
})();

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})
