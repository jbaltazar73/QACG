require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');
let executionNumber = "";

Then(/^ingreso "XXPO007-1" en el campo "TaskCode" de la página "ServiciosEnLinea"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe);
    await serviciosLineaPage.ingresarTaskCodeProv();
});

Then(/^ingreso "BABY O SA de CV" en campo "SupplierName" de form "Execution Form"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe4);
    await serviciosLineaPage.ingresarNameProveedor();
});

Then(/^doy click en el botón "Execute" de form "Execution Form"$/, async () => {
    await serviciosLineaPage.clickBtnExecuteForm();
});

