const productosModel = require("./database");
console.log("Ejecutando pruebas.js");


const imprimirTransacciones = async (lista)=>{
    console.log("\nDESCRIPCION                     FECHA                                                          MONTO");
    for(var i=0;i<lista[0].length;i++){
        console.log("-----------------------------------------------------------------------------------------------------");
        console.log(lista[0][i]+" | "+lista[1][i]+" | $ "+lista[2][i]);
        //// lista[0][i] ----> descripcion de la transferencia i
        //// lista[1][i] ----> fecha de la transferencia i
        //// lista[2][i] ----> monto de la transferencia i
    }
    return;
}

(async () => {
    /// prueba saldoPorCuenta
    //const a=await productosModel.saldoPorCuenta('1');
    //console.log(a);

    /// prueba cuentasPorCliente
    console.log(await productosModel.cuentasPorCliente('20168189-8'));
    
    /// prueba transaccionesPorCuenta
    ///console.log(await (await productosModel.transaccionesPorCuenta('1')));
    //imprimirTransacciones( (await productosModel.nTransaccionesPorCuenta('1',5)));

    /////prueba registrarCliente
    ///console.log(await(productosModel.registrarCliente('20007475-4','nombre','contacto@gmail.com','username','123')));

    /// prueba crearCuenta
    ///console.log(await(productosModel.crearCuentaBancaria('20007475-4','Itau',0,'1223')));


    ///prueba obtenerInfoCuenta
    //console.log(await(productosModel.obtenerInfoCuenta('20168189-8')));
}
)()