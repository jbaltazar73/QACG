const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class LoginPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
     */
    get inputUsername () {
        return $('#userid');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#btnActive');
    }

    get logoName () {
        return $('.xnu');
    }

    get errorMessage () {
        return $('.error-message-container');
    }

    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async ingresarCredenciales (ususario, contraseña) {
        await this.inputUsername.setValue(ususario);
        await this.inputPassword.setValue(contraseña);
    }

    async iniciarSesion () {
        await this.btnLogin.click();
    }

    abrirPagina () {
        return super.open('egqu-dev1.fa.us2.oraclecloud.com/fscmUI/faces/AtkHomePageWelcome');
    }
}

module.exports = new LoginPage();
