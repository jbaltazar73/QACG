# Prueba-WebDriverio

Proyecto de demostración para el proyecto webdriverio cucumber bdd

### 💻 Prerrequisitos:
- Node JS
- Java 8 para Allure Reporter

---

### 👾 Extensiones de VS code recomendadas:

- Cucumber for Visual Studio Code

---

### 🚀 Installar y ejecutar el proyecto:

- Descargue la carpeta o clona el repositorio
-  Instale las dependencias del proyecto con `npm install`
- Abra una terminar y ejecute el comando `docker-compose -f .\selenium-4-grid.yml up`
-  En otra terminal, ejecute todas las pruebas con `npm run wdio`

---

### 🐳 Integraciones:
`<Docker>` : <https://webdriver.io/docs/docker>

`<Jenkins>` : <https://webdriver.io/docs/jenkins>

`<Allure Reporter>` : <https://webdriver.io/docs/allure-reporter>

`<Spec Reporter>` : <https://webdriver.io/docs/spec-reporter>

`<Junit Reporter>` : <https://webdriver.io/docs/junit-reporter>

`<Lighthouse CI CLI>` : <https://www.npmjs.com/package/@lhci/cli>

`<Cucumber>` : <https://webdriver.io/docs/frameworks#using-cucumber>

`<Page Object Pattern>` : <https://webdriver.io/docs/pageobjects>

`<Selenium Standalone Service>` <https://webdriver.io/docs/selenium-standalone-service>

---

### ✅ Reportes:

El proyecto cuenta con la integración de cuatro reportes:

| Reporte       | Comando       | Descripción                    |
| ---------     | ------------- | ------------------------------ |
| Spec Reporter | `npm run wdio`                                 | Da un informe de las pruebas mediante la terminal. |
|Allure Reporter| `(allure generate --clean) -and (allure open)` | Ejecuta el plugin de WebdriverIO para crear Allure Test Reports que se abrirán automáticamente en el navegador. |
|Lighthouse CI  | `lhci autorun`   | Ejecuta pruebas de rendimiento con Lighthouse. Posteriormente, en la terminal se mostrarán los enlaces para consultar los resultados en el navegador.  |
|Junit Reporter  | `npm run wdio`   | Crea informes JUnit basados en XML compatibles con Jenkins.  |

##### 🔆 Configuración para Lighthouse CI:
En el archivo `lighthouserc.js` se encuentra la configuración necesaria para la ejecución de las pruebas con Lighthouse CI. En dicho archivo, se encuentra un arreglo donde se deben agregar todas las rutas del sistema que se requieren probar:

```javascript
module.exports = {
    ci: Lighthouse CI
      collect: {
        startServerCommand: "npm run start",
        numberOfRuns: 1,
        // Agregar todas las urls a las que se le aplicarán las pruebas
        url: [
          "https://the-internet.herokuapp.com/login",
          "https://the-internet.herokuapp.com/checkboxes",
          "https://the-internet.herokuapp.com/dropdown",
        ],
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };
```