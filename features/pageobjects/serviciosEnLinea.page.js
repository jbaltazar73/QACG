const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class serviciosLineaPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
     */
    get spanServicios () {
        return $('span');
    }

    get taskManageOption () {
        return $('i[class="fa fa-tasks"]');
        //#page-sidebar-menu > li:nth-child(4) > a:nth-child(1)
    }

    get taskExecuteOption () {
        return $('a[id="link_TASK_EXECUTE"]');
    }
    get iframe () {
        return $('iframe[id="iframe_TASK_EXECUTE"]');
    }
    get inputTaskCode () {
        return $('input[placeholder="Task Code"]');
    }
    get btnQuery () {
        return $('span[data-bind="click:query"]');
    }
    get btnExecute () {
        return $('#grid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td:nth-child(5) > a');
    }
    get iframe2 () {
        return $('iframe[title="Execution Form"]');
    }
    get btnBuscarCompany () {
        return $('#task_form > div:nth-child(1) > div:nth-child(1) > div > div > span > span > span.k-select');
    }
    get inputCompañia () {
        return $('input[name="coaSegmentName_input"]');
    }
    get btnQuery2 () {
        return $('span[data-bind="click:lovQuery"]');
    }
    get option01SegmentValue () {
        return $('body > div.k-widget.k-window > div.k-lov-win.k-window-content.k-content.k-animation-container > div.k-lov-grid.k-grid.k-widget > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) > td:nth-child(2)');
    }
    get bntPeriodF () {
        return $('#task_form > div:nth-child(11) > div:nth-child(1) > div > div > span > span > span.k-select');
    }
    get inputPeriodName () {
        return $('input[name="periodName"]');
    }
    get btnQuery3 () {
        return $('body > div:nth-child(7) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.panel > form > div > div.col-sm-2 > span');      
    }
    get btnQueryC () {
        return $('body > div.k-widget.k-window > div.k-lov-win.k-window-content.k-content.k-animation-container > div.panel > form > div > div.col-sm-2 > span');
    }

    get optionPeriodName () {
        return $('body > div:nth-child(7) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.k-lov-grid.k-grid.k-widget > div.k-grid-content.k-auto-scrollable > table > tbody > tr');
        //        body > div.k-widget.k-window > div.k-lov-win.k-window-content.k-content.k-animation-container > div.k-lov-grid.k-grid.k-widget > div.k-grid-content.k-auto-scrollable > table > tbody > tr
    }
    //BALANZA CONSOLIDADA
    get optionPeriodNameC () {
        return $('body > div.k-widget.k-window > div.k-lov-win.k-window-content.k-content.k-animation-container > div.k-lov-grid.k-grid.k-widget > div.k-grid-content.k-auto-scrollable > table > tbody > tr');
    }
    //
    get btnPeriodT () {
        return $('#task_form > div:nth-child(11) > div:nth-child(2) > div > div > span > span > span.k-select');
    }
    get inputPeriodT () {
        return $('body > div:nth-child(8) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.panel > form > div > div.col-sm-10.k-lov-form > div > div > input');
    }
    //balanza consolidada
    get inputPeriodTC () {
        return $('body > div:nth-child(6) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.panel > form > div > div.col-sm-10.k-lov-form > div > div > input');
    }
    //
    get btnQuery4 () {
        return $('body > div:nth-child(8) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.panel > form > div > div.col-sm-2 > span');
    }

    get btnQueryBC () {
        return $('body > div:nth-child(6) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.panel > form > div > div.col-sm-2 > span');
                //
    }
    //BALANZA CONSOLIDADA
    get btnRowBC () {
        return $('body > div:nth-child(6) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.k-lov-grid.k-grid.k-widget > div.k-grid-content.k-auto-scrollable > table > tbody > tr');
              //body > div:nth-child(6) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.k-lov-grid.k-grid.k-widget > div.k-grid-content.k-auto-scrollable > table > tbody > tr  
    }

    get optionPeriodTRow () {
        return $('body > div:nth-child(8) > div.k-lov-win.k-window-content.k-content.k-animation-container > div.k-lov-grid.k-grid.k-widget > div.k-grid-content.k-auto-scrollable > table > tbody > tr');
        
    }
    get btnExecute2 () {
        return $('span[id="execute"]'); 
    }
    get btnContinue () {
        return $('body > div.k-widget.k-window.k-window-titleless > div > div.modal-footer > button.btn.btn-default');     
    }
    get spanExecutionNumber () {
        return $('body > div.k-widget.k-window.k-window-titleless > div > div.modal-body > table > tbody > tr > td:nth-child(2)');
    }
    get btnHome () {
        return $('a[id="link_home"]');
    }
    get btnEL () {
        return $('#link_TASK_EXECUTION > span');
    }
    get btnOperation () {
        return $('body > div.page-container > div.page-content-wrapper > div > div.page-head > div.page-toolbar > div > button');
    }
    get btnRefresh () {
        return $('#page-refresh-button');
    }
    get iframe3 () {
        return $('iframe[id="iframe_TASK_EXECUTION"]');
    }
    get spanTaskExecuted () {
        return $('#grid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) > td:nth-child(5) > span');
        //        #grid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) > td:nth-child(5) > span
    }
    get TaskExecutedTD () { //Execution NUMBER in table of executionLog
        return $('#grid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) > td:nth-child(1)');
    }
    get resultDownloadRow () {
        return $('#grid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) > td:nth-child(9) > a');
                //#grid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) > td:nth-child(9) > a
    }
    get resultDownloadVentana () {
        return $('#grid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) > td:nth-child(9) > a');   
    }
    //SELECTORES DEL FLUJO FED
    get inputLedger () {
        return $('#task_form > div > div:nth-child(1) > div > div > div > div > input');   
    }
    get selectLed () {
        return $('select[id="P_LEDGER"]');   
    }
    get companySegment () {
        return $('#task_form > div > div:nth-child(2) > div > div > div > div > input');   
    }
    get inputPeriodFrom () {
        return $('#P_ACCOUNTING_PERIOD_FROM');   
    }
    get inputPeriodTo () {
        return $('#P_ACCOUNTING_PERIOD_TO');   
    }
    //SELECTORES DEL FLUJO FED
    //SELECTORES CONSULTA FACTURAS
 
    get iconoAccount () {
        return $('#page-sidebar-menu > li:nth-child(5) > a > span.title');   
    }
    get btnStatus () {
        return $('#link_AP_INVOICE_DETAIL > span');   
    }
    get inputFrom () {
        return $('input[id="dispersionDateFrom"]');   
    }
    get inputTo () {
        return $('input[id="dispersionDateTo"]');   
    }
    //CONSULTA FACT

    //SELECTORES VIDEO 5
    get iframe4 () {
        return $('iframe[class="k-content-frame"]');
    }
    get inputNameProv (){
        return $('input[name="SupplierName"]');
    }
    get btnExecuteForm () {
        return $('#content-container > div > div > div > span.btn-primary');
    }

    //consulta
    get iframeConsulta () {
        return $('iframe[id="iframe_AP_INVOICE_DETAIL"]');
    }
    get btnQueryConsulta () {
        return $('#query-form > div > div.pull-right.row > span:nth-child(2)');
    }
    get btnExportar () {
        return $('#query-form > div > div.pull-left.row > span > i');
                 
    }
    get spanNumFact () {
        return $('#grid > div.k-pager-wrap.k-grid-pager.k-widget.k-floatwrap > span.k-pager-sizes.k-label > span > span > span.k-select');
    }
    //
    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async clickTaskManage () {
        await this.taskManageOption.click();
    }
    async clickTaskExecute () {
        await this.taskExecuteOption.click();
    }

    async ingresarTaskCode () {
        await this.inputTaskCode.setValue("XXGL029");
        await this.btnQuery.click();
    }
    //BALANZA CONSOLIDADA
    async ingresarTaskCodeConsolidada () {
        await this.inputTaskCode.setValue("XXGL033");
        await this.btnQuery.click();
    }
    //fed
    async ingresarTaskCodeFed () {
        await this.inputTaskCode.setValue("XXGL005");
        await this.btnQuery.click();
    }
    //
    async clickBtnExecute () {
        await this.btnExecute.click();
    }
    async clickBtnBuscarCompany () {
        await this.btnBuscarCompany.click();
    }
    async ingresarCompañia () {
        await this.inputCompañia.setValue("Compañia");
    }
    async clickBtnQuery () {
      //  this.waitForDisplayed()
        await this.btnQuery2.click();
    }
    async clickCoasegmentName () {
        await this.option01SegmentValue.doubleClick();
    }
    async clickBtnBuscarPeriodF () {
        await this.bntPeriodF.click();
    }
    async ingresarPeriodName () {
        await this.inputPeriodName.setValue("Nov-23");
    }
    async clickBtnQuery3 () {
        await this.btnQuery3.click();
    }
//balanza consolidada
    async clickBtnQueryC () {
        await this.btnQueryC.click();
    }
//
    async clickOptionPeriodName () {
        await this.optionPeriodName.doubleClick();
    }
    //consolidada
    async clickOptionPeriodNameC () {
        await this.optionPeriodNameC.doubleClick();
    }
    //
    async clickOptionPeriodT () {
        await this.btnPeriodT.click();
    }
    async ingresarPeriodT () {
        await this.inputPeriodT.setValue("Nov-23");
    }
    //
    async ingresarPeriodTC () {
        await this.inputPeriodTC.setValue("Nov-23");
    }
    //
    async clickBtnQuery4 () {
        await this.btnQuery4.click();
    }
    //BALANZA CONSOLIDADA
    async clickBtnQueryBC () {
        await this.btnQueryBC.click();
    }
    //
    async clickOptionPeriodNameRow () {
        await this.optionPeriodTRow.doubleClick();
    }
   //BALANZA CONSOLIDADA
    async clickOptionPeriodNameRowC () {
        await this.btnRowBC.doubleClick();
    }
   //
    async clickBtnExecute2 () {
        await this.btnExecute2.click();
    }
    async clickBtnContinue () {
        await this.btnContinue.click();
    }
    async clickBtnHome () {
        await this.btnHome.click();
    }
    async clickBtnExecutionLog () {
        await this.btnEL.click();
    }
    async clickBtnOperation () {
        await this.btnOperation.click();
    }
    async clickBtnRefresh() {
        await this.btnRefresh.click();
    }
    async clickBtnExecutionResultDownload () {
        await this.resultDownloadRow.click();
    }
    //MÉTODOS DE FLUJO FED
    async clickLedger () {
        await this.inputLedger.click();
        
    }
    async selectLedger () {
       
        await this.selectLed.selectByAttribute('value', 'L1_MSTAT_SMNYL_AJUSTES');;
    }
    //MÉTODOS VIDEO 5
    async ingresarTaskCodeProv () {
        await this.inputTaskCode.setValue("XXPO007-1");
        await this.btnQuery.click();
    }

    async ingresarNameProveedor(){
        await this.inputNameProv.setValue("BABY O SA de CV");
    }
    
    async clickBtnExecuteForm () {
        await this.btnExecuteForm.click();
    }
    //FLUJO FED
    async ingresarLedger () {
        await this.inputLedger.setValue("L1_MSTAT_SMNYL_AJUSTES");
        await browser.keys("\uE007")
    }
    async ingresarCompanySegment () {
        await this.companySegment.setValue("SMA1");
        await browser.keys("\uE007")
    }
    async ingresarPeriodFrom() {
        await this.inputPeriodFrom.setValue("2023010");
    }
    async ingresarPeriodTo() {
        await this.inputPeriodTo.setValue("2023010");
    }
    //FLUJO FED
    //FLUJO CONSULTA FACTURAS
    async clickAccount() {
        await this.iconoAccount.click()
    }
    async clickStatus() {
        await this.btnStatus.click()
    }
    async ingresarFechaFrom () {
        await this.inputFrom.setValue("04/12/2023 00:00")
    }
    async ingresarFechaTo () {
        await this.inputTo.setValue("04/12/2023 00:00")
    }
    async clickBtnQueryConsulta () {
        await this.btnQueryConsulta.click()
    }
    async clickBtnExportar () {
        await this.btnExportar.click()
    }

    //FLUJO CONSULTA FACTURAS
}

module.exports = new serviciosLineaPage();
