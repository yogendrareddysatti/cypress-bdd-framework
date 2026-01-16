const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  },
video: true,
screenshotOnRunFailure:true,
screenshotsFolder: "cypress/reports/screenshots",
videosFolder:"cypress/reports/videos",
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://automationpractice.blogspot.com",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      const envName = config.env.environment || "dev";

      const envConfigPath = path.resolve(
        "cypress/config",
        `${envName}.json`
      );

      if (fs.existsSync(envConfigPath)) {
        const envConfig = JSON.parse(
          fs.readFileSync(envConfigPath)
        );

        config.baseUrl = envConfig.baseUrl;
        config.env = { ...config.env, ...envConfig };
      }

      return config;
    },
  },
});

