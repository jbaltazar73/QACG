const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class InformationPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
    */

    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputPostalCode () {
        return $('#postal-code');
    }

    get btnContinue () {
        return $('#continue');
    }


    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async ingresarDatosDeEnvío () {
        await this.inputFirstName.setValue("Daniel");
        await this.inputLastName.setValue("García Morales");
        await this.inputPostalCode.setValue("91130");
        await this.btnContinue.click();
    }
}

module.exports = new InformationPage();