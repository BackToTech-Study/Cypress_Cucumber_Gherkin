# Cypress_Cucumber_Gherkin
Exercises with Cypress

## General
* The test specification and implementation are in `cypress/integration` folder of this repo
* Cucumber(gherking) VS code plugin: `Cucumber (Gherkin) Full Support`
* Gherkin is the language used to specify the test cases. 
The language was developed in order to make the test specification wasy to understant.
* Cucumber is cypress plugin

## Cypress folder structure
* The `fixtures` folder is used to hold the test data
* The `integraton` folder will hold the test cases
* The `screenshot` folders will hold the sccreenshots made during the test
* The `support` folder is used for holding custom support functions
* The `videos` folder is used to hold the videos recorded during the test execution
* The `plugins` folder contains the installed plugins
* The `cycpres.json` file contains cypres configurations.

## Preparation info using this repo
* after you download the repo run `npm install` to get all the libraries
* to open cypress run `npx cypress open`

## Prepartion info for new projects
* In VSC (Visual Studio Code): `npm install`
* In VSC : `npm init`
* In a command window: `npm install cypress --save-dev`
* Check installation by running: `npx cypress open`
* In VSC : Install from extensions : Cucumbert (Gherkin) Full support

## Installation Cucumber plugin
* Install the plugin by running:
    ```
        npm install --save-dev cypress-cucumber-preprocessor
    ```

## Cypress Configuration

* Add it to your `plugins/index.js`:
    ```
        cypress/plugins/index.js

        const cucumber = require('cypress-cucumber-preprocessor').default

        module.exports = (on, config) => {
        on('file:preprocessor', cucumber())}
    ```

## Add support for feature files to your Cypress configuration:
* Edit in your `cypress.json` file:
    ```
        {
            "testFiles": "**/*.feature"
        }
        ...
        "baseUrl": "https://www.e-minu.ro/" ??
    ```
* The `cypress.json` file can also be used to configure test environments.

* Edit your `package.json` file:
    ```
        "cypress-cucumber-preprocessor": {
        "nonGlobalStepDefinitions": true
        }
    ```

## Test specification
* the `loginPage.feature` contains the test specification
* the `Background` keyword defines is a set of steps executed before each test
* each `Scenario` defines a test case
* if you comment out a `Scenario` in the test specification then the test will no longer be executed

## Test implenetation
* the `login.js` from the `Pages` folder contains a class with locators that are shared between multiple test cases
* locators are used with the format `library.locator`. Example: `loginPage.navigateToURL();`
* the test case implementations are in the `loginPage.js` file from the folder `TestCases`
* the functions `Given`, `When` and `And` must receive 
    * as a first parameter the string that matches the text from the test specification
    * as a second parameter an arrow function that represents the test implementation


## Hints and recommandations
* Prefer `timeout` vs `wait`