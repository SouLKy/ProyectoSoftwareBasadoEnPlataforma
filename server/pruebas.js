const productosModel = require("./database");
console.log("Ejecutando pruebas.js");



(async () => {
    /// prueba saldoPorCuenta
    //console.log(await productosModel.saldoPorCuenta('1'))

    /// prueba cuentasPorCliente
    //console.log(await productosModel.cuentasPorCliente('20168189-8'))
    
    /// prueba transaccionesPorCuenta
    console.log(await (await productosModel.transaccionesPorCuenta('1')))
}
)()