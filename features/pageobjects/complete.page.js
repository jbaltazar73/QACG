const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class CompletePage extends BasePage {
    /**
     * Definir selectores usando métodos getter
    */

    get header () {
        return $('.complete-header');
    }

    get text () {
        return $('.complete-text');
    }

    get btnBackToHome () {
        return $('#back-to-products');
    }

    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async regresarAlInicio () {
        await this.btnBackToHome.click();
    }
}

module.exports = new CompletePage();