require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');

Then(/^doy click en el botón Yo de la página "Home"$/, async () => {
    await homePage.clickYo();
});

Then(/^luego doy click en el botón Gastos de la página "Home"$/, async () => {
      await homePage.clickGastos();
});