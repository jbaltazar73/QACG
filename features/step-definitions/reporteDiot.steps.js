require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');

let executionNumber = "";

Then(/^espero "5" segundos$/, async () => {
    await browser.pause(10000)
});

Then(/^ingreso "([^"]*)" en el campo "TaskCode" de la página "ServiciosEnLinea"$/, async (vdato) => {
    await browser.switchToFrame(await serviciosLineaPage.iframe);
    await serviciosLineaPage.ingresarTaskCodeProv(vdato);
});

Then(/^doy click en el botón "Query" de la página "ServiciosEnLinea" en segunda ventana$/, async () => {
    await serviciosLineaPage.clickBtnExecute();
});

Then(/^doy click en lupa para campo "LEDGER"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe2);
    await serviciosLineaPage.clickLupaLedger();
});

Then(/^selecciono la opción "L_SMNYL" en el campo "Ledger" de form "Execution Form"$/, async () => {
    await serviciosLineaPage.clickfilaEmpresa();
});

Then(/^doy click en lupa para campo "PeriodF"$/, async () => {
    await serviciosLineaPage.clickLupaPeriodF();
});

Then(/^Escribo "([^"]*)" en campo "periodName" de ventana "PERIODF"$/, async (vdato) => {
    await serviciosLineaPage.inputPeriodFName(vdato);
    browser.keys("\uE007");
});
Then(/^doy click en boton "Query1" de ventana "PERIOD"$/, async () => {
    await serviciosLineaPage.clickbtnQueryPeriod(1);
});
Then(/^doy click fila de periodo1 "Oct-22" de ventana "PERIOD"$/, async () => {
    await serviciosLineaPage.clickfilaPeriodo1();
});
Then(/^doy click en lupa para campo "PeriodT"$/, async () => {
    await serviciosLineaPage.clickLupaPeriodT();
});

Then(/^Escribo "([^"]*)" en campo "periodName" de ventana "PERIODT"$/, async (vdato) => {
    await serviciosLineaPage.inputPeriodFNameT(vdato);
    browser.keys("\uE007");
});

Then(/^doy click en boton "Query2" de ventana "PERIOD"$/, async () => {
    await serviciosLineaPage.clickbtnQueryPeriod(2);
});

Then(/^doy click fila de periodo2 "Oct-22" de ventana "PERIOD"$/, async () => {
    await serviciosLineaPage.clickfilaPeriodo2();
});

Then(/^doy click en el botón "Execute" del form "Execution Form"$/, async () => {
    await serviciosLineaPage.clickBtnExecute2(); 
});

Then(/^doy click en el botón "Continue" de la ventana emergente con el numero de Task$/, async () => {
    /*
    await browser.switchToParentFrame();
    await serviciosLineaPage.clickBtnContinueDiot(); */
    await browser.switchToParentFrame(); //Regresar al primer frame(Padre)
    await expect(serviciosLineaPage.btnContinue).toHaveText('Continue')

    executionNumber = await serviciosLineaPage.btnContinue.getText();

    await serviciosLineaPage.clickBtnContinue();
});

Then(/^doy click en el icono "ExecutionLog" de la página "ServiciosEnLinea"$/, async () => {
    await browser.switchWindow("https://haperp-qa.mnyl.com.mx:8443/core/") //DESCOMENTAR
    await serviciosLineaPage.clickBtnHome(); //doy click en Home para hacer tiempo y se procese la tarea
    await browser.pause(2000)
    await serviciosLineaPage.clickBtnExecutionLog();
  
});

Then(/^doy click en el opcion "ExecutionResultDownload" de la página "ExecutionLog"$/, async () => {
    //CLICK PARA ACtualizar las operaciones, ESPERAR A QUE CAMBIE EL ESTATUS DE LA TASK
    await browser.pause(40000)
    await serviciosLineaPage.clickBtnOperation();
    await serviciosLineaPage.clickBtnRefresh();

    await browser.switchToFrame(await serviciosLineaPage.iframe3);
  
   let substring = await serviciosLineaPage.TaskExecutedTD;

    if(executionNumber.includes(substring)){
        //VERIFICAR que el SPAN de la tarea ejecutada sea SUCCESS
        await expect(serviciosLineaPage.spanTaskExecuted).toHaveText('SUCCESS')

        //Abrir el documento en ventana
       let resultValue = await serviciosLineaPage.resultDownloadVentana.getAttribute('href');
   
       await serviciosLineaPage.clickBtnExecutionResultDownload();
       await browser.switchWindow(resultValue)
       browser.pause(8000)
    }
   
   await serviciosLineaPage.clickBtnExecutionResultDownload();
   browser.pause(5000)
});
