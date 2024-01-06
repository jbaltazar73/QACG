const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class ProductsPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
    */

    get btnShoppingCar () {
        return $('.shopping_cart_badge');
    }


    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async agregarProductosAlCarrito () {
        for (var i = 2; i <= 6; i++) {
            const selectorBtnAddToCar  = await $('//div[@id="inventory_container"]/div/div[' + i + ']/div[2]/div[2]/button');
            var btnAddToCar = $(selectorBtnAddToCar);
            
            await btnAddToCar.click();
        }
    }

    async removerProductosDelCarrito () {
        for (var i = 2; i <= 6; i++) {
            const selectorBtnRemove  = await $('//div[@id="inventory_container"]/div/div[' + i + ']/div[2]/div[2]/button');
            var btnRemove = $(selectorBtnRemove);
            
            await btnRemove.click();
        }
    }

    async revisarCarrito () {
        await this.btnShoppingCar.click();
    }
}

module.exports = new ProductsPage();