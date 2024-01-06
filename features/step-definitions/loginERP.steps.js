require ('dotenv').config();
const { Given, When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/loginERP.page');
const homePage = require('../pageobjects/home.page.js');

const pages = {
    login: LoginPage
}

Given(/^Que estoy en la página de (\w+) de ERP$/ , async (page) => {
    allureReporter.addStory("User-Story-001")
    allureReporter.addSeverity("critical")
    await pages[page].abrirPagina();
});

When(/^Ingreso mis credenciales válidas en ERP "([^"]*)" y "([^"]*)"$/, async (usuario, pass) => {
    await LoginPage.ingresarCredenciales(usuario, pass);
});

When(/^Hago click en el botón de inicio de sesión de ERP$/, async () => {
    await LoginPage.iniciarSesion();
});

Then(/^Se muestra la página principal ERP$/, async () => {
    await expect(LoginPage.logoName).toBeExisting();
});

Then(/^doy click en el botón "Navegador" de la página "Home"$/, async () => {
    await homePage.clickHome();
});

//flujo video 5
/*
When(/^Ingreso mis credenciales válidas des ERP (\w+) y (\w+)$/, async () => {
    await LoginPage.ingresarCredenciales(process.env.USUARIO_ERP_5, process.env.CONTRASENA_ERP_5);
});*/