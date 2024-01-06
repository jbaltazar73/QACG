require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');
let executionNumber = "";

Then(/^doy click en la opción "EjecucionDeDesarrollos" de la página "Home"$/, async () => {
  // await browser.url('https://egqu-dev1.fa.us2.oraclecloud.com/fscmUI/faces/AtkHomePageWelcome')
      
    await homePage.clickEjecucion();
    await browser.switchWindow("https://haperp-qa.mnyl.com.mx:8443/core/")
});
Then(/^doy click en el icono "TaskMange" de la página "ServiciosEnLinea"$/, async () => {
    await serviciosLineaPage.clickTaskManage();
});

Then(/^doy click en el icono "TaskExecute" de la página "ServiciosEnLinea"$/, async () => {
    await serviciosLineaPage.clickTaskExecute();
});

Then(/^ingreso "XXGL029" en el campo "TaskCode" de la página "ServiciosEnLinea"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe);
    await serviciosLineaPage.ingresarTaskCode();
});

Then(/^doy click en el botón "Execute" de la página "ServiciosEnLinea" en segunda ventana$/, async () => {
    await serviciosLineaPage.clickBtnExecute();
});

Then(/^doy click en el icono "Buscar" de la página "ServiciosEnLinea" para el campo "Compañia"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe2);
    await serviciosLineaPage.clickBtnBuscarCompany();
});
Then(/^ingreso "Compañia" en el campo "coaSegmentName" de la página "ServiciosEnLinea" en ventana SegmentParameter$/, async () => {
    await browser.setTimeout({ 'script': 60000 })
    await serviciosLineaPage.ingresarCompañia();
});

Then(/^doy click en el botón "Query" de la página "ServiciosEnLinea" en ventana SegmentParameter$/, async () => {
   // await serviciosLineaPage.btnQuery2.waitForDisplayed({ timeout: 8000 })
   // await expect(serviciosLineaPage.btnQuery2).toBeExisting();
    await browser.setTimeout({ 'script': 60000 })
    await serviciosLineaPage.clickBtnQuery();
});

Then(/^doy click en la opción "01" de la página "ServiciosEnLinea" en ventana SegmentParameter$/, async () => {
   // await serviciosLineaPage.option01SegmentValue.getText() === '01'
   // await expect(serviciosLineaPage.option01SegmentValue).toBeExisting();
    await serviciosLineaPage.option01SegmentValue.waitForDisplayed({ timeout: 9000 })
    await serviciosLineaPage.clickCoasegmentName();
});

Then(/^doy click en el icono "Buscar" de la página "ServiciosEnLinea" para el campo "PeriodF"$/, async () => {
    await serviciosLineaPage.clickBtnBuscarPeriodF();
    
 });
Then(/^ingreso "Nov-23" en el campo "PeriodName" de la página "BalancePeriod"$/, async () => {
    await serviciosLineaPage.ingresarPeriodName();
});
Then(/^doy click en el botón "Query" de la página "BalancePeriod"$/, async () => {
    await serviciosLineaPage.clickBtnQuery3();
});

Then(/^doy click en la opción "Nov-23" de la página "BalancePeriod" para el campo "PeriodName"$/, async () => {
    await expect(serviciosLineaPage.optionPeriodName).toBeExisting();
    await serviciosLineaPage.clickOptionPeriodName();
});

Then(/^doy click en el icono "Buscar" de la página "BalancePeriod" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.clickOptionPeriodT();
});

Then(/^ingreso "Nov-23" en el campo "PeriodName" de la página "BalancePeriod" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.ingresarPeriodT();
});
Then(/^doy click en el botón "Query" de la página "BalancePeriod" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.clickBtnQuery4();
});
Then(/^doy click en la opción "Nov-23" de la página "BalancePeriod" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.btnQuery4.waitForDisplayed({ timeout: 4000 })
    await serviciosLineaPage.clickOptionPeriodNameRow(); 
});
Then(/^doy click en el botón "Execute" de la página "TaskExecute"$/, async () => {
    await serviciosLineaPage.clickBtnExecute2();
});
Then(/^doy click en el botón "Continue" de la página "TaskExecute"$/, async () => {
    
    await browser.switchToParentFrame(); //Regresar al primer frame(Padre)
    await expect(serviciosLineaPage.btnContinue).toHaveText('Continue')

    executionNumber = await serviciosLineaPage.btnContinue.getText();

    await serviciosLineaPage.clickBtnContinue();
 });
 Then(/^espero "10" segundos$/, async () => {
    await browser.pause(10000)
});
/////////////
 Then(/^doy click en el botón "ExecutionLog" de la página "ServiciosEnLinea"$/, async () => {
    await browser.switchWindow("https://haperp-qa.mnyl.com.mx:8443/core/") //DESCOMENTAR
    await serviciosLineaPage.clickBtnHome(); //doy click en Home para hacer tiempo y se procese la tarea
    await browser.pause(2000)
    await serviciosLineaPage.clickBtnExecutionLog();
  
});

Then(/^doy click en el botón "ExecutionResultDownload" de la página "ExecutionLog"$/, async () => {
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