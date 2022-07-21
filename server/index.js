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
            rut: login,
        }
        jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'}, (err, token) => {
            res.json({
            token
        })
        })
    }
})
/*retorna un json con [abonos,cargos] relacionadas con la cuenta segun su id
{
    "abonos": 31622174,
    "cargos": -31622174,
    "total": 0
}
*/
app.post('/balance',async function(req,res){
    const {id} = req.body
    const balance = await productosModel.saldoPorCuenta(id)
    res.json({
        abonos: balance[0],
        cargos: balance[1],
        total: balance[0]+balance[1]
    })
})

/*retorna un json con listas [[nombrebanco1,nombrebanco2,...,nombrebancoN],[id1,,id2..idN]] 
{
    "bancos": [
        "Scotiabank",
        "Itau"
    ],
    "id": [
        1,
        2
    ]
}
*/
app.post('/accountBank',async function(req,res){
    const {cookie} = req.body
    console.log(cookie)
    jwt.verify(cookie,process.env.ACCESS_TOKEN_SECRET,async function(err,user){
        if(err){
            res.sendStatus(403)
        }
        else{
            const rut = user['rut']
            const cuenta = await productosModel.cuentasPorCliente(rut)
            res.json({
                bancos: cuenta[0],
                id: cuenta[1],
                numeroCuenta: cuenta[2]
            })
        }
    })
})
/*
{
    "descripciones": [
        "TEF 11404034-7 CRISTIAN ALEJAN",
        "TEF 76800593-1 Maxxa Capital S"
    ],
    "fechas": [
        "2022-05-31T04:00:00.000Z",
        "2022-05-31T04:00:00.000Z"
    ],
    "montos": [
        1200000,
        -233098
    ]
}
*/
app.post('/transaction',async function(req,res){
    const {id,n} = req.body
    if(n==0){
        const transaction = await productosModel.transaccionesPorCuenta(id)
        res.json({
            descripciones: transaction[0],
            fechas: transaction[1],
            montos: transaction[2]
        })
    }
    else{
    const transaction = await productosModel.nTransaccionesPorCuenta(id,n)
    res.json({
        descripciones: transaction[0],
        fechas: transaction[1],
        montos: transaction[2]
    })
}
})

app.post('/register',async function(req,res){
    const {rut,nombre,contacto,username,password} = req.body
    await productosModel.registrarCliente(rut,nombre,contacto,username,password,async function(err,reg){
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                estado: reg
            })
        }
    })
})

app.post('/createAccountBank',async function(req,res){
    const {rut,nroCuenta,banco} = req.body
    await productosModel.crearCuentaBancaria(rut,parseInt(nroCuenta),banco,async function(err,reg){
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                estado: reg
            })
        }
    })
})
app.post('/infoAccount',async function(req,res){
    const {cookie} = req.body
    console.log(cookie)
    jwt.verify(cookie,process.env.ACCESS_TOKEN_SECRET,async function(err,user){
        if(err){
            res.sendStatus(403)
        }
        else{
            const rut = user['rut']
            const cuenta = await productosModel.obtenerInfoCuenta(rut)
            res.json({
                rut: cuenta[0],
                nombre: cuenta[1],
                contacto: cuenta[2],
                usuario: cuenta[3]
            })
        }
    })
})

//De aqui para abajo no tomar en cuenta el codigo Atte:Soulky
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

app.post("/l",async function(req,res){
    const user = {
        rut:'20168189-8'
    }
    jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'},(err,token)=>{
        res.json({
            token
        })
    })
})