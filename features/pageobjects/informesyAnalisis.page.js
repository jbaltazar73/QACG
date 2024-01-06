const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class InformesPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
     */
    get btnExaminarCatalogo () {
        return $('#pt1\\:_FOr1\\:1\\:_FOSritemNode_tools_reports_and_analytics\\:0\\:_FOTsr1\\:0\\:pt1\\:ap1\\:cil4');
        
    }
    get btnPaneles () {
        return $('#dashboard');
    }
    get btnPersonalizar () {
        return $('a[foldername="Personalizar"]');
    }
    get btnScroll () {
        return $('body > div.masterMenu.HeaderPopupWindow > div:nth-child(3) > a');
    }
    get btnRegistro () {
        return $('a[aria-label="Registro de cuentas"]');
    }
    get btnRegistroCuentasV2 () {
        return $('div[title="Registro de cuentas v2"]');
    }
    get btnConfiguracion () {
        return $('a[id="reportViewMenu"]');
    }
    get iframeRegistroV2 () {
        return $('iframe[name="d_dashboard_p_te1metr2887mt23i_s_lp8ednu87qtj2ash_i_ob9m27efv1oas443"]');
    }
    get btnProgramar () {
        return $('#_xdoFMenu0 > div > div > ul > li:nth-child(8) > div > a');
    }
    get iframeRegistroVision () {
        return $('iframe[name="d_dashboard_p_te1metr2887mt23i_s_lp8ednu87qtj2ash_i_ob9m27efv1oas443"]');
                            
    }
    get iframeRegistroParam () {
        return $('iframe[name="ifr1"]');              
    }
    get inputLedger () {
        return $('input[id="xdo:xdo:_paramsp_ledger_div_input"]');
    }
    get selectLedger () {
        return $('select[id="xdo:_paramsp_ledger"]'); //#xdo\\:_paramsp_ledger
    }
    get inputPeriodFrom () {
        //return $('table > tbody > tr > td > div > table > tbody > tr > td> input');
       //return $('input[id="xdo:xdo:_paramsp_period_from_div_input"]');
       return $('//*[@id="xdo:xdo:_paramsp_period_from_div_input_searchDialog_input"]');
       
    }

    get inputCheckLedger(){
        return $('input[id="xdo:xdo:_paramsp_ledger_div_cb_all"]');
    }
 
    get inputCheckLedgerSMNYL(){
        return $('input[id="xdo:xdo:_paramsp_ledger_div_cb_24"]');
    }
    
    get iconoFlechaPeriod_From(){
        return $('#xdo\\:_paramsp_period_from_div > a > span');
    }

    get iconoBuscarPeriod_From(){
        return $('#xdo\\:xdo\\:_paramsp_period_from_div_s > span > span.dialogFloatLeft');
    }

    get inputPeriod_From () {
        // return $('#xdo\\:xdo\\:_paramsp_period_from_div_input_searchDialog_input');
        //return $('body > div:nth-child(11) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > table > tbody > tr > td > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > input');
        //return $('#xdo:xdo:_paramsp_period_from_div_input_searchDialog_input');
        //return $("#xdo\\:xdo\\:_paramsp_period_from_div_input_searchDialog_input");
        //return $('input[class="SearchInputTextBox"]');
        //return $('body > div.OACMasterGlobalLayer.ComponentHeader > div.OACMasterGlobalLayer.ComponentHeader > table.masterPrimaryLayer.PrimaryTabTable > tbody > tr > td > div#PageContentOuterDiv > div > table > tbody > tr > td > div.SectionDiv >  ');
        //return $('body > #xdo\\:xdo\\:_paramsp_period_from_div_input_searchDialog > div.dialog_shadow > div.dialog_body > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > table > tbody > tr > td > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > input');
        //return $('body > div#xdo\\:xdo\\:_paramsp_period_from_div_input_searchDialog > div.dialog_shadow > div.dialog_body > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > table > tbody > tr > td > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > input');
        return $("//*[contains(@class,'SearchInputTextBox')]");
    }

    get filaPeriod_From () {
        //return $('input[id="xdo:xdo:_paramsp_period_from_div_input_searchDialog_input"]');
        //return $('#xdo\\:xdo\\:_paramsp_period_from_div_input_searchDialog_input');
        //return $('div[id="xdo:xdo:_paramsp_period_from_div_input_searchDialog_searchResults"] > div.masterShuttleSelectItem.fieldText');
        //return $('div.masterShuttleSelectItem.fieldText');
        //return $('#xdo\\:xdo\\:_paramsp_period_from_div_input_searchDialog_searchResults > div.selected.masterShuttleSelectItem.fieldText[valule="202311"]');
        //return $ ('div#xdo:xdo:_paramsp_period_from_div_input_searchDialog_dialogBody > table > tbody > tr > td > div > div > div > div#xdo\:xdo\:_paramsp_period_from_div_input_searchDialog_searchResults > div:nth-child(219)');
        //return $('//*[@id="xdo:xdo:_paramsp_period_from_div_input_searchDialog_searchResults"]/div');

        return $('#xdo\\:xdo\\:_paramsp_period_from_div_input_searchDialog_searchResults > div:nth-child(219)');

    }

    get selectSegmentFrom() {
        return $('#xdo\\:xdo\\:_paramsp_segment_from_div_input');
        
    }

    get selectSegmentTo () {
        return $('#xdo\\:xdo\\:_paramsp_segment_to_div_input');
    }

    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async clickExaminar () {
        await this.btnExaminarCatalogo.click();
    }
    async clickPaneles () {
        await this.btnPaneles.click();
    }
    async clickPersonalizar () {
        await this.btnPersonalizar.click();
    }
    async clickScroll () {
        await this.btnScroll.click();
    }
    async clickRegistroCuentas () {
        await this.btnRegistro.click();
    }
    async clickOptionV2 () {
        await this.btnRegistroCuentasV2.click();
    }
    async clickBtnConfiguracion () {
        await this.btnConfiguracion.click();
    }
    async clickBtnProgramar () {
        await this.btnProgramar.click();
    }
    async clickCampoLedger () {
        await this.inputLedger.click()//setValue("L_SMNYL");
     //   await this.inputLedger.setValue("Keys.chord(Keys.CONTROL, 'a'), Keys.DELETE, 'L_SMNYL'");
      //  await this.selectLedger.selectByAttribute('value', 'L_SMNYL');
    }
    async ingresarCampoLedger () {
        await this.inputLedger.setValue("L_SMNYL");
      //  await this.selectLedger.selectByAttribute('value', 'L_SMNYL');
    }
    async clickSelectLedger () {
        await this.selectLedger.selectByAttribute('value', '*');
        //#xdo\:_paramsp_ledger > option:nth-child(1)

       // await this.selectLedger.selectByAttribute('value', '*');
       // await this.selectLedger.selectByAttribute('value', 'L_SMNYL');
    }

    async clickinputCheckLedger () {
        await this.inputCheckLedger.click();
    }

    async clickinputCheckLedgerSMNYL () {
        await this.inputCheckLedgerSMNYL.click();
    }
    
    async clickFlechaPeriod_From () {
        await this.iconoFlechaPeriod_From.click();
    }

    async clickBuscarPeriod_From () {
        await this.iconoBuscarPeriod_From.click();
    }

    async clickinputPeriod_From () {
        await this.inputPeriod_From.setValue("Nov-23");
    }

    async clickselectSegment_From() {
        //await this.selectSegmentFrom.selectByAttribute('value', '1101');
        await this.selectSegmentFrom.click();
        await this.selectSegmentFrom.setValue("1101");
    }

    async clickselectSegment_To() {
        await this.selectSegmentTo.click();
        await this.selectSegmentTo.setValue("1501");
    }








    async clickfilaPeriod_From () {
        await this.filaPeriod_From.click();
    }





    async clickPeriodFrom () {
        await this.inputPeriodFrom.setValue("Nov-23")//.doubleClick();
    }

}

module.exports = new InformesPage();