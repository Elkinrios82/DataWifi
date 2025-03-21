const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Implementa eventos de nodo aquí si es necesario
    },
    browser: "chrome",
    testIsolation: false,
    pageLoadTimeout: 8000,
    defaultCommandTimeout: 8000,  // Tiempo máximo de espera para cada comando 
    requestTimeout: 8000,        // Tiempo máximo de espera para las solicitudes de red 
    pageLoadTimeout: 30000,     // Tiempo máximo de espera para la carga de páginas 
  },
});
