const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "y7gktf",
  e2e: {
    baseUrl: process.env.TEST_LIVE ? 'https://itskaywat.github.io/construction-portfolio-project' : 'http://localhost:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1280,
  viewportHeight: 800
}) 