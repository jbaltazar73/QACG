/**
* Contiene todos los métodos, selectores y funcionalidades
* que se comparten en todos los page objects
*/
module.exports = class Page {
    /**
    * Abre una sub página de la página
    * @param path ruta de la sub página (e.j. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://${path}`);
    }
}
