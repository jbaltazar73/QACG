require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const crearFacturaPage = require('../pageobjects/crearFactura.page.js');

let executionNumber = "";
const path = require('path')
const fs = require('fs')

//PASOS PARA EL FLUJO FED
Then(/^doy click en el botón "CuentasAPagar" de la página "Home"$/, async () => {
    await homePage.clickCuentas();
});
Then(/^doy click en el botón "Facturas" de la página "Home"$/, async () => {
    await homePage.clickFacturas();
});
Then(/^doy click en el botón "Crear" de la página "Facturas"$/, async () => {
    await homePage.btnCrear.waitForEnabled(); 
    await homePage.btnCrear.isClickable() 
    await homePage.clickBtnCrear();
});
Then(/^ingreso "BU SEGUROS MONTERREY" en el campo "UnidadDeNegocio" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputUnidad.waitForEnabled(); 
    await  crearFacturaPage.inputUnidad.isClickable() 
    await  crearFacturaPage.ingresarUnidad();
});
Then(/^ingreso "lome" en el campo "Proveedor" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputProveedor.waitForEnabled(); 
    await  crearFacturaPage.inputProveedor.isClickable() 
    await  crearFacturaPage.ingresarProveedor();
});
Then(/^ingreso "LHB981231385CIE" en el campo "SitioDeProveedor" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputSitio.waitForEnabled(); 
    await  crearFacturaPage.inputSitio.isClickable() 
    await  crearFacturaPage.ingresarSitio();
});
Then(/^ingreso "PRUEBA" en el campo "FacturaPolizaAsesorProm" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputFactura.waitForEnabled(); 
    await  crearFacturaPage.inputFactura.isClickable() 
    await  crearFacturaPage.ingresarFactura();
});

Then(/^ingreso "10.00" en el campo "Importe" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputImporte.waitForEnabled(); 
    await  crearFacturaPage.inputImporte.isClickable() 
    await  crearFacturaPage.ingresarImporte();
});
Then(/^ingreso "PRUEBA" en el campo "Descripción" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputDescripcion.waitForEnabled(); 
    await  crearFacturaPage.inputDescripcion.isClickable() 
    await  crearFacturaPage.ingresarDescripcion();
});

Then(/^selecciono la opción "Inmediato" en el campo "CondicionesDePago" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputCondicion.waitForEnabled(); 
    await  crearFacturaPage.inputCondicion.isClickable() 
    await  crearFacturaPage.ingresarCondicion();
});

Then(/^ingreso "FUENTES" en el campo "Solicitante" de la página "CrearFactura"$/, async () => {
    await  crearFacturaPage.inputSolicitante.waitForEnabled(); 
    await  crearFacturaPage.inputSolicitante.isClickable() 
    await  crearFacturaPage.ingresarSolicitante();
    browser.pause(10000)
});
Then(/^doy click en Buscar Solicitante$/, async () => {
   // await  crearFacturaPage.iconoBuscar.isClickable()
    await  crearFacturaPage.clickSolicitante();
});

Then(/^doy click en el botón "Líneas" de la página "CrearFacturas"$/, async () => {
    await  crearFacturaPage.btnLineas.isClickable() 
    await  crearFacturaPage.clickLineas();
});

Then(/^ingreso "10.00" en el campo "Importe" de la página "CrearFactura-Lineas"$/, async () => {
    await  crearFacturaPage.inputImporteL.isClickable() 
    await  crearFacturaPage.ingresarImporteL();
});

Then(/^doy click en el botón "BuscarCombinacionDeDistribucion" de la página "CrearFacturas"$/, async () => {
      await  crearFacturaPage.btnCombinacion.isClickable() 
      await  crearFacturaPage.clickCombinacion();
    //  await browser.switchToParentFrame();
   // await browser.switchToFrame(await crearFacturaPage.iframe2);
    await browser.switchToFrame(await crearFacturaPage.iframe);
});
  Then(/^selecciono la opción "01 Seguros Monterrey" en el campo "Compañia" de la página "CrearFactura"$/, async () => {
   // await  crearFacturaPage.inputCompañia.waitForEnabled(); 
   // browser.pause(10000)
   
   // await browser.switchToFrame(await crearFacturaPage.iframe2);
   // await browser.switchToFrame(await crearFacturaPage.iframe);
 
  // await expect(crearFacturaPage.inputCompañia).toHaveText('Compañia')
    await  crearFacturaPage.ingresarCompañia();
});