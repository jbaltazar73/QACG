const BasePage = require('./basePage');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class ProductsPage extends BasePage {
    /**
     * Definir selectores usando métodos getter
    */

    get btnHome () {
        return $('//*[@id="pt1:_UIShome"]')
    }

    get btnProveedores () {
        return $('//*[@id="c_6ecd2b87afd047bdb0d5a9db8529d969_14"]')
    }

    get linkgestionTareas () {
        return $('//*[@id="page-sidebar-menu"]/li[4]')
    }

    get linkejecutarTareas () {
        //return $('//*[@id="link_TASK_EXECUTE"]')
        //return $('#link_TASK_EXECUTE');
        return $('#link_TASK_EXECUTE');
    }

    async botonHome() {
        await this.btnHome.click();
    }

    async iconoProveedores() {
        await this.btnProveedores.click();

    }

    async cambioPestaña() {
        //browser.switchTab([windowHandle]);
        await browser.switchWindow('haperp-qa.mnyl.com.mx:8443/')
 
        // you can also overwrite the default timeout if needed
    }

    async gestionTareas() {
        await this.linkgestionTareas.click();
    }

    async ejecutarTareas() {
        await this.linkejecutarTareas.click();
    }

    async esperolistadetareas(){
        const myElem = await $('#iframe_TASK_EXECUTE');
        await myElem.waitForDisplayed();
        await myElem.waitForDisplayed({ timeout: 10000 });
        //await browser.setTimeout({ 'pageLoad': 10000 })
    }

    //get linkExecuteTarea(){
        //return $('a[onclick="executionTask(\'TASK\',11688,\'PO007-SyncSupplierInfpTask\',);return false"]');
        //return $('#iframe_TASK_EXECUTE/body/div/div/div/div/table/tr[5]/td[5]/a');
      //  return $('Execute');
    //}

    async sincronizarProveedor(){
       // $('#page-content .k-grid-content:nth-child(25)').$('a*=Execute').click();
       // $('a[onclick="executionTask(\'TASK\',11688,\'PO007-SyncSupplierInfpTask\',);return false"]').click();
       //.$('//*[@id="iframe_TASK_EXECUTE"]')
       console.log('codigo:');

       /*await $('.page-container').$('.page-content-wrapper')
                .$('.page-content')
                .$('.page-content-main')
                .$('#tabstrip-parent')
                .$('#mainTab')
                .$('#mainTab-2')
                .$('#iframe_TASK_EXECUTE')
                .$('document')
                .$('#page-content')
                .$('#grid')
                .$('.k-grid-content k-auto-scrollable')
                .$('a[onclick="executionTask(\'TASK\',11688,\'PO007-SyncSupplierInfpTask\',);return false"]').click();*/
              
        

        //const myElem = await $('//*[@id="iframe_TASK_EXECUTE"]').$('//*[@id="executeForm_wnd_title"]');
        const myElem = await $('//*[@id="executeForm_wnd_title"]');
        await myElem.waitForDisplayed();
        await myElem.waitForDisplayed({ timeout: 35000 });
    }















    

    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async agregarProductosAlCarrito () {
        for (var i = 2; i <= 6; i++) {
            const selectorBtnAddToCar  = await $('//div[@id="inventory_container"]/div/div[' + i + ']/div[2]/div[2]/button');
            var btnAddToCar = $(selectorBtnAddToCar);
            
            await btnAddToCar.click();
        }
    }

    async removerProductosDelCarrito () {
        for (var i = 2; i <= 6; i++) {
            const selectorBtnRemove  = await $('//div[@id="inventory_container"]/div/div[' + i + ']/div[2]/div[2]/button');
            var btnRemove = $(selectorBtnRemove);
            
            await btnRemove.click();
        }
    }

    async revisarCarrito () {
        await this.btnShoppingCar.click();
    }
}

module.exports = new ProductsPage();