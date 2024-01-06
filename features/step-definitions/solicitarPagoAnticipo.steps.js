require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const solicitarAnticipoEfectivoPage = require('../pageobjects/solicitarAnticipoEfectivo.page.js');
const gastosPage = require('../pageobjects/gastos.page.js');
const loginPage = require('../pageobjects/loginERP.page');

Then(/^doy click en el botón Anticipos de efectivo de la página "Gastos"$/, async () => {
    await gastosPage.clickAnticipoEfectivo();
});

Then(/^doy click en el botón Solicitar anticipo de efectivo de la página "Gastos"$/, async () => {
    await gastosPage.clickSolicitarAnticipoEfectivo();
});

Then(/^doy click en el campo de texto Importe de anticipo y escribo "1,000" de la página "SolicitarAnticipoEfectivo"$/, async () => {
    await solicitarAnticipoEfectivoPage.clickTextFieldImporteAnticipo();
    await solicitarAnticipoEfectivoPage.ingresarImporteAnticipo();
});

Then(/^doy click en el campo de texto Finalidad y escribo "CAPACITACIÓN" de la página "SolicitarAnticipoEfectivo"$/, async () => {
      await solicitarAnticipoEfectivoPage.clickTextAreaFinalidadAnticipo();
      await solicitarAnticipoEfectivoPage.ingresarFinalidadAnticipo();
});

Then(/^doy click en el campo Fecha incial de vije y escribo la fecha del día actual de la página "SolicitarAnticipoEfectivo"$/, async () => {
    await solicitarAnticipoEfectivoPage.clickFechaInicialAnticipoEfectivo();
    await solicitarAnticipoEfectivoPage.ingresarFechaInicialAnticipoEfectivo();
});

Then(/^doy click en el campo Fecha final de vije y escribo la fecha del día final del viaje de la página "SolicitarAnticipoEfectivo"$/, async () => {
    await solicitarAnticipoEfectivoPage.clickFechaFinalAnticipoEfectivo();
    await solicitarAnticipoEfectivoPage.ingresarFechaFinalAnticipoEfectivo();
});

Then(/^doy click en el botón Enviar de la página "SolicitarAnticipoEfectivo"$/, async () => {
    await solicitarAnticipoEfectivoPage.clickBotonEnviarAnticipoEfectivo();
});

Then(/^se crea el anticipo y se muestra la página "SolicitarAnticipoEfectivo"$/, async () => {
    await expect(loginPage.logoName).toBeExisting();
});


