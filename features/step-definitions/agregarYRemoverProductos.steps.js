require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default

const ProductsPage = require('../pageobjects/products.page');

// Se ejecuta 1_login.feature

When(/^Agrego productos al carrito de compra$/, async () => {
    allureReporter.addStory("User-Story-002")
    allureReporter.addSeverity("critical")

    await ProductsPage.agregarProductosAlCarrito();
});

Then(/^Se muestra la cantidad de productos agregados al carrito de compra$/, async () => {
    await expect(ProductsPage.btnShoppingCar).toBeExisting();
    await expect(ProductsPage.btnShoppingCar).toHaveText("5");
});

When(/^Decido quitar los productos del carrito de compra$/, async () => {    
    allureReporter.addStory("User-Story-003")
    allureReporter.addSeverity("critical")

    await ProductsPage.removerProductosDelCarrito();
});

Then(/^Se muestra el carrito de compra vacío$/, async () => {
    await expect(ProductsPage.btnShoppingCar).not.toBeExisting();
});