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

const PORT = 3001;
app.listen(PORT, () => {
    console.log("El servidor se ha iniciado en el puerto",PORT)
});

app.post("/api",ensureToken,(req,res)=>{
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message: "Esta es una petición autenticada",
                authData
            });
        }
})});

app.post("/login", async function(req, res){
    const {username, password} = req.body
    const login = await productosModel.getLogin(username, password)
    console.log(login)//Imprime nombre de usuario
    if(login==undefined){
        res.sendStatus(403);
    }
    else{
        const user = {
            username: login,
        }
        jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'}, (err, token) => {
            res.json({
            token
        })
        })
    }
    /*
    res.json({
        "token":"abc"
    })*/
})
/*
app.post('/Data',(req,res)=>{
    const token = req.headers['authorization']
    jwt.verify(token,env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
            res.status(403).json({
                msg:'No autorizado'
            })
        }
        else{
            console.log('Subiendo archivos')
            res.json({
                msg:'Exito',
                user
            })
        }
    })
})
*/
//verifica si el token es correcto
// Authorization: Bearer <token>
function ensureToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader)
    if(typeof bearerHeader !='undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }
}
