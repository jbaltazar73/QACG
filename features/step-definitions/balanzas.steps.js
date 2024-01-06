require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');
let executionNumber = "";
const path = require('path')
const fs = require('fs')

Then(/^doy click en la opción "EjecucionDeDesarrollos" de la página "Home"$/, async () => {    
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
//BALANZA CONSOLIDADA
Then(/^ingreso "XXGL033" en el campo "TaskCode" de la página "ServiciosEnLinea"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe);
    await serviciosLineaPage.ingresarTaskCodeConsolidada();
});
//FED
Then(/^ingreso "XXGL005" en el campo "TaskCode" de la página "ServiciosEnLinea"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe);
    await serviciosLineaPage.ingresarTaskCodeFed();
});

Then(/^doy click en el botón "Execute" de la página "ServiciosEnLinea" en segunda ventana$/, async () => {
    await serviciosLineaPage.clickBtnExecute();
});
//PASO PARA POSICIONARSE EN FORMULARIO QUE SE ENCUENTRA DENTRO DE UN IFRAME
Then(/^me posiciono en el Formulario "Execution Form"$/, async () => {
    await browser.switchToFrame(await serviciosLineaPage.iframe2);
});

Then(/^doy click en el icono "Buscar" de la página "ServiciosEnLinea" para el campo "Compañia"$/, async () => {
    //await browser.switchToFrame(await serviciosLineaPage.iframe2);
    await serviciosLineaPage.clickBtnBuscarCompany();
});
Then(/^ingreso "Compañia" en el campo "coaSegmentName" de la página "ServiciosEnLinea" en ventana SegmentParameter$/, async () => {
   // await browser.setTimeout({ 'script': 60000 })
    await serviciosLineaPage.inputCompañia.waitForDisplayed({ timeout: 15000 })
    await serviciosLineaPage.ingresarCompañia();
});

Then(/^doy click en el botón "Query" de la página "ServiciosEnLinea" en ventana SegmentParameter$/, async () => {
    await serviciosLineaPage.btnQuery2.waitForDisplayed({ timeout: 8000 })
    await serviciosLineaPage.btnQuery2.isClickable() 
   // await expect(serviciosLineaPage.btnQuery2).toBeExisting();
   // await browser.setTimeout({ 'script': 30000 })
   // browser.pause(7000)
    await serviciosLineaPage.clickBtnQuery();
    //browser.execute("arguments[0].click()", serviciosLineaPage.btnQuery2);
});

Then(/^doy click en la opción "01" de la página "ServiciosEnLinea" en ventana SegmentParameter$/, async () => {
   // await serviciosLineaPage.option01SegmentValue.getText() === '01'
   // await expect(serviciosLineaPage.option01SegmentValue).toBeExisting();
    await serviciosLineaPage.option01SegmentValue.waitForDisplayed({ timeout: 9000 })
    await serviciosLineaPage.clickCoasegmentName();
});
//PASOS PARA AMBAS BALANZAS
Then(/^doy click en el icono "Buscar" de la página "ServiciosEnLinea" para el campo "PeriodF"$/, async () => {
    await serviciosLineaPage.clickBtnBuscarPeriodF();
    
 });
Then(/^ingreso "Nov-23" en el campo "PeriodName" de la página "BalancePeriod"$/, async () => {
    await serviciosLineaPage.ingresarPeriodName();
});
Then(/^doy click en el botón "Query" de la página "BalancePeriod"$/, async () => {
    await serviciosLineaPage.clickBtnQuery3();
});
//BALANZA CONSOLIDADA
Then(/^doy click en el botón "Query" de la página "BalancePeriodC" para el campo "PeriodName"$/, async () => {
    await serviciosLineaPage.clickBtnQueryC();
});

Then(/^doy click en la opción "Nov-23" de la página "BalancePeriodC" para el campo "PeriodName"$/, async () => {
    await expect(serviciosLineaPage.optionPeriodNameC).toBeExisting();
    await serviciosLineaPage.clickOptionPeriodNameC();
});
//BALANZA CONSOLIDADA

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
//BALANZA CONSOLIDADA
Then(/^ingreso "Nov-23" en el campo "PeriodName" de la página "BalancePeriodC" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.ingresarPeriodTC();
});
//
Then(/^doy click en el botón "Query" de la página "BalancePeriod" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.clickBtnQuery4();
});
//BALANZA CONSOLIDADA
Then(/^doy click en el botón "Query" de la página "BalancePeriodC" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.clickBtnQueryBC();
});
//
Then(/^doy click en la opción "Nov-23" de la página "BalancePeriod" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.btnQuery4.waitForDisplayed({ timeout: 4000 })
    await serviciosLineaPage.clickOptionPeriodNameRow(); 
});
//BALANZA CONSOLIDADA
Then(/^doy click en la opción "Nov-23" de la página "BalancePeriodC" para el campo "PeriodT"$/, async () => {
    await serviciosLineaPage.btnRowBC.waitForDisplayed({ timeout: 4000 })
    await serviciosLineaPage.clickOptionPeriodNameRowC(); 
});
//
Then(/^doy click en el botón "Execute" de la página "TaskExecute"$/, async () => {
    await serviciosLineaPage.clickBtnExecute2();
});
Then(/^doy click en el botón "Continue" de la página "TaskExecute"$/, async () => {
    
    await browser.switchToParentFrame(); //Regresar al primer frame(Padre)
    await expect(serviciosLineaPage.btnContinue).toHaveText('Continue')

    executionNumber = await serviciosLineaPage.spanExecutionNumber.getText();

    await serviciosLineaPage.clickBtnContinue();
 });
 Then(/^espero "10" segundos$/, async () => {
    await browser.pause(10000)
});
/////////////
 Then(/^doy click en el botón "ExecutionLog" de la página "ServiciosEnLinea"$/, async () => {
    await browser.switchWindow("https://haperp-qa.mnyl.com.mx:8443/core/") 
    await serviciosLineaPage.clickBtnHome(); //doy click en Home para hacer tiempo y se procese la tarea
    await browser.pause(2000)
    await serviciosLineaPage.clickBtnExecutionLog();
  
});

Then(/^doy click en el botón "ExecutionResultDownload" de la página "ExecutionLog"$/, async () => {
    //Click para actualizar las operaciones y ESPERAR A QUE CAMBIE EL ESTATUS DE LA TASK
    await browser.pause(50000) //Esperar un minuto hasta que se procese el archivo y cambie es estatus
    await serviciosLineaPage.clickBtnOperation();
    await serviciosLineaPage.clickBtnRefresh();

    await browser.switchToFrame(await serviciosLineaPage.iframe3);
  
   let substring = await serviciosLineaPage.TaskExecutedTD.getText(); 

    if(executionNumber.includes(substring)){
        //VERIFICAR que el SPAN de la tarea ejecutada sea SUCCESS
        await expect(serviciosLineaPage.spanTaskExecuted).toHaveText('SUCCESS')

       await serviciosLineaPage.clickBtnExecutionResultDownload();

       const filePath = path.join(global.downloadDir)
       browser.call(function (){
         //llame a nuestra función personalizada que verifica que el archivo exista
         return waitForFileExists(filePath, 60000)
       }); 
    }
    else{
        //volver a refrescar 
        await browser.switchToParentFrame();
        await browser.switchWindow("https://haperp-qa.mnyl.com.mx:8443/core/")
        await browser.pause(10000)
        await serviciosLineaPage.clickBtnOperation();
        await serviciosLineaPage.clickBtnRefresh();
        await browser.switchToFrame(await serviciosLineaPage.iframe3);
        await serviciosLineaPage.clickBtnExecutionResultDownload();

        const filePath = path.join(global.downloadDir)
        browser.call(function (){
            //llame a nuestra función personalizada que verifica que el archivo exista
            return waitForFileExists(filePath, 60000)
        });
    } 
});

function waitForFileExists(filePath, timeout) {
    return new Promise(function (resolve, reject) {
  
      var timer = setTimeout(function () {
        watcher.close();
        reject(new Error('File did not exists and was not created during the timeout.'));
      }, timeout);
  
      fs.access(filePath, fs.constants.R_OK, function (err) {
        if (!err) {
          clearTimeout(timer);
          watcher.close();
          resolve();
        }
      });
  
      var dir = path.dirname(filePath);
      var basename = path.basename(filePath);
      var watcher = fs.watch(dir, function (eventType, filename) {
        if (eventType === 'rename' && filename === basename) {
          clearTimeout(timer);
          watcher.close();
          resolve();
        }
      });
    });
  }