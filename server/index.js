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

app.post("/api",verifyToken,(req,res)=>{
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
////////////////// 
app.post("/login", async function(req, res){
    const {username, password} = req.body
    //console.log(username) //se lee bien el nombre de usuario desde el frontend
    //console.log(password)
    const login = await productosModel.getLogin(username, password)
    //console.log(login)
    const user = {
        username: "Pipe",
    }
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1m'}, (err, token) => {
        res.json({
        token
    })
    })
    /*if(typeof login !== "undefined"){

        jwt.sign({username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'}, (err, token) => {
            res.json({
            token: token,
        })
        })
        console.log(jwt.decode(login, process.env.ACCESS_TOKEN_SECRET))
    }
    else{
        res.status(401).json({
            error: "Usuario o contraseña incorrectos"
        })
    }
    */
})
//verifica si el token es correcto
// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
     if(typeof bearerHeader !== 'undefined'){
          const bearerToken = bearerHeader.split(" ")[1];
          req.token  = bearerToken;
          next();
     }else{
         res.sendStatus(403);
     }
}
