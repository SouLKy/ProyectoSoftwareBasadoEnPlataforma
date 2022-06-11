const express = require("express");
const app = express();
const productosModel = require("./database");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("curso-backend"))



app.get("/tipoMovimientos", jsonParser,productosModel.obtener);

app.post("/insertarTipo",jsonParser, productosModel.insertar);



const PORT = 3001;
app.listen(PORT, () => {
    console.log("El servidor se ha iniciado en el puerto",PORT)
});