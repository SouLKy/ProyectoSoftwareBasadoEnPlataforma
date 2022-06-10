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
    
    async insertar(tipo) {
        console.log(tipo,1);
        let resultados = await conexion.query("insert into tipoMovimiento(tipo) values($1)", [tipo]);
        console.log(resultados);
        return resultados;
    },
    async obtener() {
        const resultados = await client.query("select * from tipomovimiento t ");
        return resultados.rows;
    }/*,
    async obtenerPorId(id) {
        const resultados = await conexion.query(`select id, nombre, precio from productos where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id, nombre, precio) {
        const resultados = conexion.query(`update productos
        set nombre = $1,
        precio = $2
        where id = $3`, [nombre, precio, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = conexion.query(`delete from productos
        where id = $1`, [id]);
        return resultados;
    },
    */
}