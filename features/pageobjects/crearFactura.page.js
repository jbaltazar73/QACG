const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class crearFacturaPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
     */
    get inputUnidad () {
        return $('#pt1\\:_FOr1\\:1\\:_FOSritemNode_payables_payables_invoices\\:0\\:MAnt2\\:1\\:pm1\\:r1\\:0\\:ap1\\:r2\\:0\\:ic2\\:\\:content');
    }
    get inputProveedor () {
        return $('#pt1\\:_FOr1\\:1\\:_FOSritemNode_payables_payables_invoices\\:0\\:MAnt2\\:1\\:pm1\\:r1\\:0\\:ap1\\:r2\\:0\\:ic3\\:\\:content');
    }
    get inputSitio () {
        return $('#pt1\\:_FOr1\\:1\\:_FOSritemNode_payables_payables_invoices\\:0\\:MAnt2\\:1\\:pm1\\:r1\\:0\\:ap1\\:r2\\:0\\:ic4\\:\\:content');
    }
    get inputFactura () {
        return $('#pt1\\:_FOr1\\:1\\:_FOSritemNode_payables_payables_invoices\\:0\\:MAnt2\\:1\\:pm1\\:r1\\:0\\:ap1\\:r2\\:0\\:i2\\:\\:content');
    }
    get inputImporte () {
        return $('#pt1\\:_FOr1\\:1\\:_FOSritemNode_payables_payables_invoices\\:0\\:MAnt2\\:1\\:pm1\\:r1\\:0\\:ap1\\:r2\\:0\\:i3\\:\\:content');
    }
    get inputDescripcion () {
        return $('textarea[id="pt1:_FOr1:1:_FOSritemNode_payables_payables_invoices:0:MAnt2:1:pm1:r1:0:ap1:r2:0:i4::content"]');
    }
    get inputCondicion () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_payables_payables_invoices:0:MAnt2:1:pm1:r1:0:ap1:r2:0:so3::content"]');
    }
    get iconoBuscar () {
        return $('a[id="pt1:_FOr1:0:_FOSritemNode_payables_payables_invoices:0:MAnt2:0:pm1:r1:0:ap1:r2:0:ic6::lovIconId"]');
        //              pt1:_FOr1:0:_FOSritemNode_payables_payables_invoices:0:MAnt2:0:pm1:r1:0:ap1:r2:0:ic6::lovIconId
    }
    get inputSolicitante () {
        return $('input[id="pt1:_FOr1:1:_FOSritemNode_payables_payables_invoices:0:MAnt2:1:pm1:r1:0:ap1:r2:0:ic6::content"]');
    }
    get btnLineas () {
        return $('a[title="Ampliar Líneas"]');
    }
    get inputImporteL () {
        return $('input[id="pt1:_FOr1:0:_FOSritemNode_payables_payables_invoices:0:MAnt2:0:pm1:r1:0:ap1:at2:_ATp:ta2:0:i26::content"]');
                //          pt1:_FOr1:0:_FOSritemNode_payables_payables_invoices:0:MAnt2:0:pm1:r1:0:ap1:at2:_ATp:ta2:0:i26::content
    }
    get btnCombinacion () {
        return $('a[title="Seleccionar: ID de combinación de distribución"]');
                
    }
    get iframe() {
        return $('#__af_Z_maskingframe > iframe:nth-child(1)');  //iframe[name="afr::PushIframe"]
        //#__af_Z_maskingframe > iframe:nth-child(1) 
        //#__af_Z_maskingframe > iframe:nth-child(1)
        //#__af_Z_maskingframe > iframe:nth-child(2)     
    }
    get iframe2() {
        return $('#__af_Z_maskingframe > iframe:nth-child(2)');  //iframe[name="afr::PushIframe"]  
    }
    get inputCompañia () {
        
        return $('#pt1\\:_FOr1\\:0\\:_FOSritemNode_payables_payables_invoices\\:0\\:MAnt2\\:0\\:pm1\\:r1\\:0\\:ap1\\:at2\\:_ATp\\:ta2\\:0\\:kf1SPOP_query\\:criterion0 > td.x15.x4z > label');
        //input[id="pt1:_FOr1:0:_FOSritemNode_payables_payables_invoices:0:MAnt2:0:pm1:r1:0:ap1:at2:_ATp:ta2:0:kf1SPOP_query:value00::content"]        
    }
    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async ingresarUnidad () {
        await this.inputUnidad.setValue("BU SEGUROS MONTERREY");
    }
    async ingresarProveedor () {
        await this.inputProveedor.setValue("LOMELIN HERMANOS BIENES RAICES SC|LHB981231385");
    }
    async ingresarSitio () {
        await this.inputSitio.setValue("LHB981231385BBV");
    }
    async ingresarFactura () {
        await this.inputFactura.setValue("PRUEBA");
    }
    async ingresarImporte () {
        await this.inputImporte.setValue("10.00");
    }
    async ingresarDescripcion () {
        await this.inputDescripcion.setValue("PRUEBA");
    }
    async ingresarCondicion () {
        await this.inputCondicion.setValue("Inmediato");
    }
    async clickSolicitante () {
        await this.iconoBuscar.click();
    }
  
    async ingresarSolicitante () {
        await this.inputSolicitante.setValue("FUENTES MARTINEZ, LUIS FERNANDO");//MARTINEZ, LUIS FERNANDO 70006119 lfuentes-pruebas@mnyl.com.mx
    }
    async clickLineas () {
        await this.btnLineas.click();
    }
    async ingresarImporteL () {
        await this.inputImporteL.setValue("10.00");
    }
    async clickCombinacion () {
        await this.btnCombinacion.click()
    }
    async ingresarCompañia () {

        await this.inputCompañia.setValue("01")
    }
}

module.exports = new crearFacturaPage();