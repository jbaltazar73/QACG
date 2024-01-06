const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class HomePage extends BasePage {
    /**
     * Definir selectores usando métodos getter
     */
    get btnHome () {
        return $('a[id="pt1:_UIScil1u"]');
    }
    get btnEjecucion () {
        return $('#c_c65868ac363a4673b81ba91e12385997');
    }
    get btnYo () {
        return $('div[id="groupNode_my_information"]')
    }
    get btnGastos () {
        return $('div[id="itemNode_my_information_expenses"]')
    }
    //registro cuentas
    get btnHerramientas () {
        return $('#groupNode_tools_10');
    }
    get btnInformes () {
        return $('#itemNode_tools_reports_and_analytics_3');
    }
    get btnGestion () {
        return $('#groupNode_cash_management_3');
    }
    get btnSaldos () {
        return $('#itemNode_cash_management_cash_balances_0');
    }
    get btnTareas () {
        return $('a[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:_FOTsdi__CashBalanceWorkArea_itemNode__TasksList::disAcr"]');
    }
    get btnGestionar () {
        return $('a[id="pt1:_FOr1:1:_FOSritemNode_cash_management_cash_balances:0:_FOTRaT:0:RAtl2"]');
    }
    get btnMas () {
        return $('#pt1\\:_FOr1\\:1\\:_FOSritemNode_cash_management_cash_balances\\:0\\:MAnt2\\:1\\:AP1\\:ATManageBat\\:_ATp\\:create > a:nth-child(1)');
    }
    get btnSeguros () {
        return $('#pt1\\:_UIScil1u');
    }
    get btnCuentas () {
        return $('#groupNode_payables_1');
    }
    get btnFacturas () {
        return $('#itemNode_payables_payables_invoices_1');
    }
    get btnCrear () {
        return $('button[title="Crear factura"]');
    }
    get btnCrearFactura () {
        return $('');
    }
    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async clickHome () {
        await this.btnHome.click();
    }
    async clickEjecucion () {
        await this.btnEjecucion.click()
    }
    async clickYo () {
        await this.btnYo.click()
    }
    async clickGastos () {
        await this.btnGastos.click()
    }
    //Flujo Registro
    async clickHerramientas () {
        await this.btnHerramientas.click()
    }
    async clickInformes () {
        await this.btnInformes.click()
    }
    //Flujo video 1
    async clickGestion () {
        await this.btnGestion.click()
    }
    async clickSaldos () {
        await this.btnSaldos.click()
    }
    async clickTareas () {
        await this.btnTareas.click()
    }
    async clickGestionar () {
        await this.btnGestionar.click()
    }
    async clickMas () {
        await this.btnMas.click()
    }
    async clickSeguros () {
        await this.btnSeguros.click()
    }
    //video 3 Crear factura
    async clickCuentas () {
        await this.btnCuentas.click()
    }
    async clickFacturas () {
        await this.btnFacturas.click()
    }
    async clickBtnCrear () {
        await this.btnCrear.click()
    }
    async clickBtnCrearFactura () {
        await this.btnCrearFactura.click()
    }

}

module.exports = new HomePage();
