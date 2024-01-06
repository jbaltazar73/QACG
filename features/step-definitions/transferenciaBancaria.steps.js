require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const transferenciaPage = require('../pageobjects/crearTransferencia.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');
let executionNumber = "";
const path = require('path')
const fs = require('fs')

var cuentaO;
let cuentaD =null;
let fecha =null;
let importe =null;
let  unidad= null;
let metodo =null;
let  perfil = null;


Then(/^doy click en el botón "GestionDeEfectivo" de la página "Home"$/, async () => {    
    await homePage.clickGestion();
});
Then(/^doy click en el botón "SaldosDeEfectivo" de la página "Home"$/, async () => {    
    await homePage.clickSaldos();
});
Then(/^doy click en el botón "Tareas" de la página "SaldosDeEfectivo"$/, async () => {    
    await homePage.clickTareas();
});
Then(/^doy click en el botón "GestionarTransferenciasDeCuentasBancarias" de la página "SaldosDeEfectivo"$/, async () => {    
    await homePage.clickGestionar();
});

Then(/^doy click en el botón "Mas" de la página "SaldosDeEfectivo"$/, async () => {    
    await homePage.clickMas();
});
Then(/^selecciono la opción "MX7311HSBC" en el campo "CuentaDeOrigen" de la página "CrearTransferencia"$/, async () => {    
    await transferenciaPage.inputCuentaO.isClickable()
    await transferenciaPage.ingresarCuentaOrigen();
    cuentaO = await transferenciaPage.inputCuentaO.getText();
});
Then(/^selecciono la opción "MX8549HSBC" en el campo "CuentaDeDestino" de la página "CrearTransferencia"$/, async () => {    
    await transferenciaPage.inputCuentaD.isClickable()
    await transferenciaPage.ingresarCuentaDestino();
})

Then(/^ingreso "21122023" en el campo "FechaDeTransferencia" de la página "CrearTransferencia"$/, async () => { 
   // browser.pause(6000)   
   await transferenciaPage.inputFecha.isClickable()
    await transferenciaPage.ingresarFecha();
   
})
Then(/^ingreso "12000" en el campo "ImporteDeTransferencia" de la página "CrearTransferencia"$/, async () => {    
    await transferenciaPage.inputImporte.waitForEnabled();
    await transferenciaPage.inputImporte.isClickable()
    await transferenciaPage.ingresarImporte();
})

Then(/^ingreso "BU SEGUROS MONTERREY" en el campo "UnidadDeNegocio" de la página "CrearTransferencia"$/, async () => { 
    await transferenciaPage.inputUnidad.waitForEnabled();   
    await transferenciaPage.inputUnidad.isClickable()
    await transferenciaPage.ingresarUnidad();
})

Then(/^selecciono la opción "Electrónico" en el campo "MétodoDePago" de la página "CrearTransferencia"$/, async () => {  
    await transferenciaPage.inputMetodo.waitForEnabled(); 
    await transferenciaPage.inputMetodo.isClickable() 
    await transferenciaPage.ingresarMetodo();
})
Then(/^selecciono la opción "EFT" en el campo "PerfilDePago" de la página "CrearTransferencia"$/, async () => {    
    await transferenciaPage.inputPerfil.waitForEnabled(); 
    await transferenciaPage.inputPerfil.isClickable() 
    await transferenciaPage.ingresarPerfil();
})
Then(/^ingreso "Admin F" en el campo "Nota" de la página "CrearTransferencia"$/, async () => {    
    await transferenciaPage.inputNota.waitForEnabled(); 
    await transferenciaPage.inputNota.isClickable() 
    await transferenciaPage.ingresarNota();
  //  browser.pause(10000)
})
Then(/^doy click en el botón "Enviar" de la página "CrearTransferencia"$/, async () => {    
    await transferenciaPage.clickBtnEnviar();
})
Then(/^doy click en el botón "Si"$/, async () => {    
    await transferenciaPage.clickBtnSi();
})
Then(/^valido que el campo "CuentaDeOrigen" de la página "GestionarTransferenciasDeCuentasBancarias" sea "MX7311HSBC"$/, async () => {    
    await expect(transferenciaPage.cuentaOrigenTd).toBeExisting();
    //obtener el td que contiene el texto de la transderencia realizada
    let origenTd = await transferenciaPage.cuentaOrigenTd.getText();
    if(origenTd === cuentaO){
        console.log("OKOK");
    }
    else{
        console.log("ERROR")
    }
})
Then(/^doy click en el icono "SegurosMonterrey" de la página "Home"$/, async () => {    
    await homePage.clickSeguros();
})
Then(/^ingreso "BANCOMER" en el campo "TaskName" de la página "ServiciosEnLinea"$/, async () => {    
    await browser.switchToFrame(await serviciosLineaPage.iframe);
    await transferenciaPage.ingresarTaskName();
})
Then(/^doy click en el botón "Execute" de la página "ServiciosEnLinea" para traspasos bancarios$/, async () => {    
    await transferenciaPage.clickExecute();
})
Then(/^ingreso "2023-12-01 12:10" en el campo "PeriodoDeInicio" de la página "ExecutionForm"$/, async () => {    
    await transferenciaPage.ingresarPerInicio();
})
Then(/^ingreso "2023-12-01 15:10" en el campo "PeriodoDeFinalizacion" de la página "ExecutionForm"$/, async () => {    
    await transferenciaPage.ingresarPerFin();
})
Then(/^selecciono la opción "TraspasosInterbancarioBancomer" en el campo "TipoDeTraspaso" de la página "ExecutionForm"$/, async () => {    
    await transferenciaPage.ingresarTipo();
})