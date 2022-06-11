const { Pool } = require('pg');


const connectionData = {
    user: 'postgres',
    host: 'containers-us-west-69.railway.app',
    database: 'railway',
    password: 'hXQeCzfmkafLoQhKhjMy',
    port: 5510,
};

const client = new Pool(connectionData);
//client.connect();



module.exports = {
    
    async insertar(request,response) {
        const { tipo } = request.body;
        await client.query("insert into tipoMovimiento(tipo) values($1)", [tipo]);
        response.status(201).redirect("/tipoMovimientos");
    },
    async obtener(request,response) {
        const resultados = await client.query("select * from tipoMovimiento t ");
        response.status(200).json(resultados.rows);
    }
}