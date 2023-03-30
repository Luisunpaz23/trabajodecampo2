const express = require("express");

const app = express();

const datos = require("../data/data.json");

console.log(datos);

app.get("/api", (req, res) => {
    console.log("Paso por api");
    res.json(
        datos.personas
    ).status(200);
});



getConnection = async () => {
    try {
        app.listen(3000, console.log("SERVER STARTED"));
    } catch (error) {
        console.log(error);
    }
}

getConnection();