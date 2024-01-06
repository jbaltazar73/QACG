const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class CrearTransferencia extends BasePage {
    /**
     * Definir selectores usando métodos getter
     */
    get inputCuentaO () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:icl1::content"]');
    }
    get inputCuentaD () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:icl2::content"]');
    }
    get inputFecha () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:id1::content"]');
    }
    get inputImporte () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:it1::content"]');
    }
    get inputMetodo () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:icl4::content"]');
    }
    get inputPerfil () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:icl5::content"');
    }
    get inputNota () {
        return $('textarea[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:it3::content"');
    }
    get btnEnviar () {
        return $('button[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:cb3"]');
    }
    get inputUnidad () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:icl3::content"]');
    }
    get btnSi () {
        return $('button[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:MAnt2:2:AP2:cb1"]');
    }
    get cuentaOrigenTd () {
        return $('table.x1hg:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)');
        //        table.x1hg:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)//
    }
    get inputTaskName () {
        return $('input[placeholder="Task Name"]');
    }
    get btnQuery () {
        return $('span[data-bind="click:query"]');
    }
    get btnExecute () {
        return $('.k-alt > td:nth-child(5) > a:nth-child(1)');
    }
    get inputPerInicio () {
        return $('input[id="p_start_time"]');
    }
    get inputPerFin () {
        return $('input[id="p_end_time"]');
    }
    get inputTipo () {
        return $('input[name="Tipo de Traspaso_input"]');
    }
    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async ingresarCuentaOrigen () {
        await this.inputCuentaO.setValue("MX7311HSBC");
      //  await browser.keys("\uE007")//Realizar un Enter
    }
    async ingresarCuentaDestino () {
        await this.inputCuentaD.setValue("MX8549HSBC");
       // await browser.keys("\uE007")//Realizar un Enter
    }
    async ingresarFecha () {
        await this.inputFecha.clearValue();
        //await this.inputFecha.setValue("21/12/2023");
       // await browser.keys("\uE007")//Realizar un Enter
    }
    async ingresarImporte () {
        await this.inputImporte.setValue("12000");
    }
    async ingresarUnidad () {
        await this.inputUnidad.setValue("BU SEGUROS MONTERREY");
    }
    async ingresarMetodo () {
        await this.inputMetodo.setValue("Electrónico");
    }
    async ingresarPerfil () {
        await this.inputPerfil.setValue("EFT");
        await browser.keys("\uE007")
    }
    async ingresarNota () {
        await this.inputNota.setValue("Admin F");
    }
    async clickBtnEnviar () {
        await this.btnEnviar.click();
    }
    async clickBtnSi () {
        await this.btnSi.click();
    }
    async ingresarTaskName () {
        await this.inputTaskName.setValue("BANCOMER");
        await this.btnQuery.click();
    }
    async clickExecute () {
        await this.btnExecute.click();
    }
    async ingresarPerInicio () {
        await this.inputPerInicio.setValue("2024-01-04 11:10");
    }
    async ingresarPerFin () {
        await this.inputPerFin.setValue("2024-01-04 13:10");
    }
    async ingresarTipo () {
        await this.inputTipo.setValue("TRASPASOS_MISMO_BANCO_BANCOMER");
    }
}

module.exports = new CrearTransferencia();
