const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class YouCartPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
    */

    get btnCheckout () {
        return $('#checkout');
    }


    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async confirmarProductos () {
        await this.btnCheckout.click();
    }
}

module.exports = new YouCartPage();