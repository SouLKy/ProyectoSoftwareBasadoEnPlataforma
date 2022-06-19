const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
require('dotenv').config();


const connectionData = {
    user: 'postgres',
    host: 'containers-us-west-69.railway.app',
    database: 'railway',
    password: 'hXQeCzfmkafLoQhKhjMy',
    port: 5510,
};

const client = new Pool(connectionData);
//client.connect();

const getLogin = async (username, password)=>{
    const query = `SELECT * FROM cliente WHERE usuario = '${username}' AND contraseña = '${password}'`;
    const result =  await client.query(query);
    if(result.rowCount>0){
        return generateAccessToken(username);
    }
    return undefined;
}
function generateAccessToken(username){
    return jwt.sign({username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10s'});
}

module.exports = {
    getLogin,
    async insertar(request,response) {
        const { tipo } = request.body;
        await client.query("insert into tipoMovimiento(tipo) values($1)", [tipo]);
        response.status(201).redirect("/tipoMovimientos");
    },
    async obtener(request,response) {
        const resultados = await client.query("select * from Cliente c ");
        response.status(200).json(resultados.rows);
    }
}