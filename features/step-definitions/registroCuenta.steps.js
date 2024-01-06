require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');
const informesPage = require('../pageobjects/informesyAnalisis.page.js');

let executionNumber = "";
const path = require('path')
const fs = require('fs')

Then(/^espero "10" segundos en v$/, async () => {
    await browser.pause(10000)
});

Then(/^doy click en el botón "Herramientas" de la página "Home"$/, async () => {    
    await homePage.clickHerramientas();
   // await browser.switchWindow("https://haperp-qa.mnyl.com.mx:8443/core/")
});
Then(/^doy click en el botón "InformesYAnalisis" de la página "Home"$/, async () => {
    await  homePage.clickInformes();
});
Then(/^doy click en el botón "ExaminarCatalogo" de la página "InformesYAnalisis"$/, async () => {
    await informesPage.btnExaminarCatalogo.waitForDisplayed({ timeout: 15000 })
    await  informesPage.clickExaminar();
    //await browser.switchWindow("https://egqu-dev1.fa.us2.oraclecloud.com/analytics/saw.dll?catalog")
    browser.url('https://egqu-dev1.fa.us2.oraclecloud.com/analytics/saw.dll?catalog')
    //
});

Then(/^doy click en el botón "PanelesDeControl" de la página "Catalogo"$/, async () => {
    await informesPage.clickPaneles();
});

Then(/^doy click en el botón "Personalizar" de la página "Catalogo"$/, async () => {
    for(let i=0;i<15;i++)
    {
        await informesPage.clickScroll()
    }
   // await informesPage.clickPersonalizar();
    await informesPage.btnPersonalizar.waitForDisplayed({ timeout: 15000 })
    await informesPage.clickPersonalizar();
    //browser.pause(9000)

});
Then(/^doy click en la opción "RegistrodeCuentas" en el campo "Personalizar" de la página "Catalogo"$/, async () => {
    for(let i=0;i<25;i++)
    {
        await informesPage.clickScroll()
    }
   // await informesPage.btnPersonalizar.waitForDisplayed({ timeout: 15000 })
    await informesPage.clickRegistroCuentas();
 
});
Then(/^doy click en el botón "Registro de cuentas v2" de la página "RegistroDeCuentas"$/, async () => {

    await informesPage.btnRegistroCuentasV2.waitForDisplayed({ timeout: 15000 })
    await informesPage.clickOptionV2();
});

Then(/^doy click en el botón "Configuracion" de la página "RegistroDeCuentas"$/, async () => {
    await browser.switchToFrame(await informesPage.iframeRegistroV2);
   // await informesPage.btnConfiguracion.waitForDisplayed({ timeout: 25000 })
    await informesPage.clickBtnConfiguracion();
});
Then(/^doy click en el botón "Programar" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickBtnProgramar();
});
Then(/^doy click en el campo "ledger" de la página "RegistroDeCuentas"$/, async () => {
    await browser.switchToParentFrame();//CAMBIARSE A OTRO IFRAME
    await browser.switchToFrame(await informesPage.iframeRegistroVision);
    await browser.switchToFrame(await informesPage.iframeRegistroParam);
  //  await browser.pause(3000)

    await browser.pause(10000)
    await informesPage.inputLedger.isExisting()//.toHaveText('Todo')
    await informesPage.clickCampoLedger();

    await informesPage.inputLedger.waitForDisplayed({ timeout: 15000 })
    await informesPage.selectLedger.isExisting();

    
    //await informesPage.selectLedger.selectByAttribute('value', '*');

   // await informesPage.ingresarCampoLedger();

  //  await browser.pause(10000)
   // await informesPage.selectLedger.isExisting()
   // await informesPage.selectLedger.waitForDisplayed({ timeout: 15000 })

   //await browser.setTimeout({ 'script': 8000 })
   // await informesPage.selectLedger.isClickable()

   // await expect(informesPage.selectLedger).toBeDisplayed()

  //  await informesPage.selectLedger.waitForEnabled();
  //  await informesPage.selectLedger.isDisplayed();

  
  //  await informesPage.clickSelectLedger();//informesPage.clickSelectLedger()
    
});

Then(/^deselecciono la opción "Todo" en el campo "ledger" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickinputCheckLedger();
});

Then(/^selecciono la opción "L_SMNYL" en el campo "ledger" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickinputCheckLedgerSMNYL();
});

Then(/^doy click en icono flecha abajo de campo "period_from" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickFlechaPeriod_From();
});

Then(/^doy click en icono "Buscar" en el campo "PeriodFrom" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickBuscarPeriod_From();
});

Then(/^ingreso "Nov-23" en el campo "Nombre" de la página "RegistroDeCuentas"$/, async () => {
    //await browser.switchToFrame(await informesPage.iframeRegistroV2);
    await informesPage.clickinputPeriod_From();
});

Then(/^selecciono la opción "1101" en el campo "segment_From" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickselectSegment_From();
});

Then(/^selecciono la opción "1501" en el campo "segment_To" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickselectSegment_To();
});



Then(/^doy clic en fila "Nov-23" de la página "RegistroDeCuentas"$/, async () => {
    await informesPage.clickfilaPeriod_From();
});







Then(/^selecciono la opción "Buscar" en el campo "PeriodFrom" de la página "RegistroDeCuentas"$/, async () => {
    
    await informesPage.inputPeriodFrom.isExisting()//.toHaveText('Todo')
    await informesPage.clickPeriodFrom();
    
});