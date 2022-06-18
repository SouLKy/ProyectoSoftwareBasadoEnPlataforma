const express = require("express");
const app = express();
const productosModel = require("./database");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const passport= require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const res = require("express/lib/response");
const passportLocal = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");

require("dotenv").config();
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

const cors = require('cors'); //importado para poder hacer consultas desde otro puerto (frontend 3000)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) //para poder leer el body que viene desde alguna petición (post login frontend)
const clients = ['http://localhost:3000']
app.use(cors({origin:clients}))

app.use(express.static("curso-backend"));
app.get("/usuarios", jsonParser,productosModel.obtener);
//app.post("/insertarTipo",jsonParser, productosModel.insertar); este esta obsoleto pero se deja para ver como funciona un POST

const PORT = 3001;
app.listen(PORT, () => {
    console.log("El servidor se ha iniciado en el puerto",PORT)
});

app.post("/login", async function(req, res){
    const {username, password} = req.body
    console.log(username) //se lee bien el nombre de usuario desde el frontend
    console.log(password)
    //obtener el jwt de alguna manera, 
    const login = await productosModel.getLogin(username, password)
    console.log(login)
    if(typeof login !== "undefined"){
        res.json({
            token:login
        })
    }
    else{
        res.status(401).json({
            error: "Usuario o contraseña incorrectos"
        })
    }
})

