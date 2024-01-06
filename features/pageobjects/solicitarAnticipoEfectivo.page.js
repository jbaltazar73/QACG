const BasePage = require('./basePage');

class SolicitarAnticipoEfectivoPage extends BasePage {
    get textFieldImporteAnticipo () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_my_information_expenses:0:MAnt2:1:AP1:it2::content"]');
    }

	get textAreaFinalidad () {
        return $('textarea[id="pt1:_FOr1:1:_FOSritemNode_my_information_expenses:0:MAnt2:1:AP1:it1::content"]');
    }

    get inputFechaInicial () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_my_information_expenses:0:MAnt2:1:AP1:id1::content"]');
    }

    get inputFechaFinal () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_my_information_expenses:0:MAnt2:1:AP1:id2::content"]');
    }

    get btnEnviar () {
        return $('div[id="pt1:_FOr1:1:_FOSritemNode_my_information_expenses:0:MAnt2:1:AP1:commandToolbarButton9"]');
    }

    async clickTextFieldImporteAnticipo() {
        await this.textFieldImporteAnticipo.click();
    }

    async ingresarImporteAnticipo () {
        await this.textFieldImporteAnticipo.setValue("1000");
    }

    async clickTextAreaFinalidadAnticipo() {
        await this.textAreaFinalidad.click();
    }

    async ingresarFinalidadAnticipo () {
        await this.textAreaFinalidad.setValue("CAPACITACIÓN");
    }

    async clickFechaInicialAnticipoEfectivo() {
        await this.inputFechaInicial.click();
    }

    async ingresarFechaInicialAnticipoEfectivo () {
        await this.inputFechaInicial.setValue("22/12/23");
    }

    async clickFechaFinalAnticipoEfectivo() {
        await this.inputFechaFinal.click();
    }

    async ingresarFechaFinalAnticipoEfectivo () {
        await this.inputFechaFinal.setValue("25/12/23");
    }

    async clickBotonEnviarAnticipoEfectivo() {
        await this.btnEnviar.click();
    }

}

module.exports = new SolicitarAnticipoEfectivoPage();
