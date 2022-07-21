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

//Comprueba si el usuario y contraseña recibidos existen en la base de datos y retorna el usuario
const getLogin = async (username, password)=>{
    const query = `SELECT * FROM cliente WHERE usuario = '${username}' AND contraseña = '${password}'`;
    const result =  await client.query(query);
    if(result.rowCount>0){
        const us = await result.rows[0]['rut'];
        return us;
    }
    return undefined;
}




const saldoPorCuenta = async (idCuenta)=>{  // retorna una tupla de [abonos,cargos] relacionadas con la cuenta segun su id
    const abonosQuery= await client.query(`select sum(abono)from  movimientobancario where idcuenta='${idCuenta}'`);
    const abonos=await abonosQuery.rows[0]['sum'].replace('$','').replace(/,/g,'');
    const cargosQuery= await client.query(`select sum(cargo)from  movimientobancario where idcuenta='${idCuenta}'`);
    const cargos=await cargosQuery.rows[0]['sum'].replace('$','').replace(/,/g,'');
    return([parseFloat(abonos),parseFloat(cargos)]);
}

const cuentasPorCliente = async (rut)=>{  // retorna una lista [[nombrebanco1,nombrebanco2,...,nombrebancoN],[id1,,id2..idN],[numero1,numero2,...numeroN]] segun rut
    const cuentasQuery= await client.query(`select * from cuenta where rutcliente='${rut}'`);
    const listaCuentas=new Array(cuentasQuery.rowCount);
    const listaId=new Array(cuentasQuery.rowCount);
    const listaNumeroCuenta=new Array(cuentasQuery.rowCount);
    for(var i=0;i<cuentasQuery.rowCount;i++){
        listaCuentas[i]=await cuentasQuery.rows[i]['nombrebanco'];
        listaId[i]=await cuentasQuery.rows[i]['idcuenta'];
        listaNumeroCuenta[i]=await cuentasQuery.rows[i]['numerocuenta'];
    }
    
   return([listaCuentas,listaId,listaNumeroCuenta]);/// [[nombres de banco], [ids por cuenta]]
  // return cuentasQuery;
}

const transaccionesPorCuenta = async (idCuenta)=>{ //// obtiene TODAS las transacciones de la cuenta
    /// retorna [[descripcion1,...,descripcionN],[fecha1,...,fechaN],[monto1,...,montoN]] 

    const transaccionesQuery= await client.query(`select * from  movimientobancario where idcuenta='${idCuenta}' order by fechamovimiento  desc `);
    const listaDescripciones=new Array(transaccionesQuery.rowCount);
    const listaFechas=new Array(transaccionesQuery.rowCount);
    const listaMontos=new Array(transaccionesQuery.rowCount);
    for(var i=0;i<transaccionesQuery.rowCount;i++){
        listaDescripciones[i]=await transaccionesQuery.rows[i]['descripcion'];

        const fecha=await transaccionesQuery.rows[i]['fechamovimiento'];
        listaFechas[i]=fecha;

        const abono=await transaccionesQuery.rows[i]['abono'].replace('$','').replace(/,/g,'');
        const abonoInt=parseFloat(abono);
        
        const cargo=await transaccionesQuery.rows[i]['cargo'].replace('$','').replace(/,/g,'');
        const cargoInt=parseFloat(cargo);

        listaMontos[i]=(cargoInt)+(abonoInt);
    }
    
    return([listaDescripciones,listaFechas,listaMontos]);
}

const nTransaccionesPorCuenta = async (idCuenta,n)=>{  //// obtiene las N transacciones de la cuenta
    /// retorna [[descripcion1,...,descripcionN],[fecha1,...,fechaN],[monto1,...,montoN]] 

    const transaccionesQuery= await client.query(`select * from  movimientobancario where idcuenta='${idCuenta}' order by fechamovimiento  desc limit ${n}`);
    const listaDescripciones=new Array(transaccionesQuery.rowCount);
    const listaFechas=new Array(transaccionesQuery.rowCount);
    const listaMontos=new Array(transaccionesQuery.rowCount);
    for(var i=0;i<transaccionesQuery.rowCount;i++){
        listaDescripciones[i]=await transaccionesQuery.rows[i]['descripcion'];

        const fecha=await transaccionesQuery.rows[i]['fechamovimiento'];
        listaFechas[i]=fecha;

        const abono=await transaccionesQuery.rows[i]['abono'].replace('$','').replace(/,/g,'');
        const abonoInt=parseFloat(abono);
        
        const cargo=await transaccionesQuery.rows[i]['cargo'].replace('$','').replace(/,/g,'');
        const cargoInt=parseFloat(cargo);

        listaMontos[i]=(cargoInt)+(abonoInt);
    }
    
    return([listaDescripciones,listaFechas,listaMontos]);
}

const registrarCliente = async (rut,nombre,contacto,usuario,contraseña)=>{  
    //// verificar que el rut no este registrado
    const buscarRutsQuery= await (await client.query(`select * from cliente c where rut='${rut}'`)).rowCount;
    if(buscarRutsQuery=='1'){
        return 'Error (el rut ya fue registrado)';
    }
    //// verificar que el nombre no este registrado
    const buscarNombreQuery= await (await client.query(`select * from cliente c where nombre='${nombre}'`)).rowCount;
    if(buscarNombreQuery=='1'){
        return 'Error (el nombre ya fue registrado)';
    }
    //// verificar que el nombre de usuario no este registrado
    const buscarNombreDeUsuario= await (await client.query(`select * from cliente c where usuario='${usuario}'`)).rowCount;
    if(buscarNombreDeUsuario=='1'){
        return 'Error (el nombre de usuario ya fue registrado)';
    }
    ///insert into cliente(rut,nombre,contacto,usuario,contraseña) values('20007475-4','nombre','contacto@gmail.com','username','123')
    const registrarQuery= await (await client.query(`insert into cliente(rut,nombre,contacto,usuario,contraseña) 
    values('${rut}','${nombre}','${contacto}','${usuario}','${contraseña}')`));
    //return registrarQuery;
    return 'Registrado con exito';
}

const crearCuentaBancaria = async (rut,numeroCuenta,banco)=>{
    const balance = 0;
    const crearCuentaQuery=  await (await client.query(`insert into cuenta(rutcliente,nombrebanco,balance,numerocuenta) 
    values('${rut}','${banco}',${balance},'${numeroCuenta}')`));
    //return registrarQuery;
    return 'Registrado con exito';
}

const obtenerInfoCuenta = async (rut)=>{
    const infoCuentaQuery= await client.query(`select * from cliente WHERE rut='${rut}'`);
    const cliente=infoCuentaQuery.rows[0];
    return[cliente['rut'],cliente['nombre'],cliente['contacto'],cliente['usuario']];
}


module.exports = {
    getLogin,
    saldoPorCuenta,
    cuentasPorCliente,
    transaccionesPorCuenta,
    nTransaccionesPorCuenta,
    registrarCliente,
    crearCuentaBancaria,
    obtenerInfoCuenta,
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