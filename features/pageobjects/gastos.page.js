const BasePage = require('./basePage');

class GastosPage extends BasePage {
    get btnAnticiposEfectivo () {
        return $('div[id="pt1:_FOr1:1:_FOSritemNode_my_information_expenses:0:_FOTsr1:0:pt0:sdi2::ti"]');
    }

    get btnSolicitarAnticipoEfectivo () {
        return $('div[id="pt1:_FOr1:1:_FOSritemNode_my_information_expenses:0:_FOTsr1:0:pt0:pt4:r4:1:commandToolbarButton2"]');
    }

    async clickAnticipoEfectivo() {
        await this.btnAnticiposEfectivo.click();
    }

    async clickSolicitarAnticipoEfectivo() {
        await this.btnSolicitarAnticipoEfectivo.click();
    }

}

module.exports = new GastosPage();
