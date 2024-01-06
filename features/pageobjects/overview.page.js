const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class OverviewPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
    */

    get labelTotal () {
        return $('//*[@id="checkout_summary_container"]/div/div[2]/div[8]');
    }

    get btnFinish () {
        return $('#finish');
    }

    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async comprarCarrito () {
        await this.btnFinish.click();
    }
}

module.exports = new OverviewPage();