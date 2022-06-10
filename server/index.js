const express = require("express");
const app = express();
const productosModel = require("./database");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("curso-backend"))



app.get("/tipoMovimientos", (request, response) => {
    productosModel.obtener().then(result => {
        console.log(result);
        response.json(result);
    })
});

app.post("/insertarTipo",jsonParser,(request,response) => {
    console.log(request.body.tipo);
    const { tipo } = request.body;
    if (!tipo) {
        return response.status(500).send("no hay dato");
    }
    // Si todo va bien, seguimos
    productosModel.insertar(tipo).then((tipo) => {
        response.redirect("/tipoMovimientos");
    })
    .catch(err => {
        return response.status(500).send("Error insertando producto");
    });
})



const PORT = 3001;
app.listen(PORT, () => {
    console.log("El servidor se ha iniciado en el puerto",PORT)
});