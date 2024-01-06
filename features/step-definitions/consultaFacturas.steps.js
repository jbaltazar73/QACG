require ('dotenv').config();
const { When, Then } = require('@wdio/cucumber-framework');
const allureReporter = require('@wdio/allure-reporter').default
const homePage = require('../pageobjects/home.page.js');
const serviciosLineaPage = require('../pageobjects/serviciosEnLinea.page.js');
//import { Key } from 'webdriverio'
let executionNumber = "";
const path = require('path')
const fs = require('fs')


//PASOS PARA EL FLUJO FED
Then(/^doy click en el botón "AccountPayablePlatform" de la página "ServiciosEnLinea"$/, async () => {
    await serviciosLineaPage.clickAccount();
});

Then(/^doy click en el botón "EstatusDeFacturas" de la página "ServiciosEnLinea"$/, async () => {
    await serviciosLineaPage.clickStatus();
    await browser.switchToFrame(await serviciosLineaPage.iframeConsulta);
});
Then(/^ingreso "04-12-2023 00:00" en el campo "DispersionDateFrom" de la página "ServiciosEnLinea"$/, async () => {
    await serviciosLineaPage.ingresarFechaFrom();
});
Then(/^ingreso "04-12-2023 00:00" en el campo "DispersionDateTo" de la página "ServiciosEnLinea"$/, async () => {
    await serviciosLineaPage.ingresarFechaTo();
});
Then(/^doy click en el botón "Query" de la página "ServiciosEnLinea"$/, async () => {
    await serviciosLineaPage.clickBtnQueryConsulta();
});
Then(/^doy click en el botón "ExportExcel" de la página "ServiciosEnLinea"$/, async () => {
   // await  serviciosLineaPage.btnExportar.waitForEnabled(); 
     
   do {
         await serviciosLineaPage.clickBtnExportar();
      
         const filePath = path.join(global.downloadDir)
         browser.call(function (){
            //llame a nuestra función personalizada que verifica que el archivo exista
            return waitForFileExists(filePath,98000)
         });

    } while (true);//isClickable()


});
Then(/^espero "30" segundos$/, async () => {
 await browser.pause(50000)
});

Then(/^guardo el archivo$/, async () => {
  const filePath = path.join(global.downloadDir)
  browser.call(function (){
    //llame a nuestra función personalizada que verifica que el archivo exista
    return waitForFileExists(filePath,98000)
  });
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