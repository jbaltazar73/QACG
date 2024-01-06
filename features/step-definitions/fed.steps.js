require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');
//import { Key } from 'webdriverio'
let executionNumber = "";
const path = require('path')
const fs = require('fs')

//PASOS PARA EL FLUJO FED
Then(/^selecciono la opción "L1_MSTAT_SMNYL_AJUSTES" en el campo "ledger" de la página "executionForm"$/, async () => {
    await serviciosLineaPage.clickLedger();
    browser.pause(5000)
  //  await serviciosLineaPage.selectLedger();
});

Then(/^ingreso "L1_MSTAT_SMNYL_AJUSTES" en el campo "ledger" de la página "ServiciosEnLinea"$/, async () => {
  await serviciosLineaPage.ingresarLedger();
  browser.pause(8000)
//  await serviciosLineaPage.selectLedger();
});
Then(/^ingreso "SMA1" en el campo "companySegment" de la página "ServiciosEnLinea"$/, async () => {
  await serviciosLineaPage.ingresarCompanySegment();
});

Then(/^ingreso "2023010" en el campo "accountingPeriodFrom" de la página "executionForm"$/, async () => {
  await serviciosLineaPage.ingresarPeriodFrom();
});
Then(/^ingreso "2023010" en el campo "accountingPeriodTo" de la página "executionForm"$/, async () => {
  await serviciosLineaPage.ingresarPeriodTo();
});