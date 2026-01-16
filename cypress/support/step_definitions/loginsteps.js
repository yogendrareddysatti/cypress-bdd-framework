import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/LoginPage";

const loginPage = new LoginPage();

let testData;

before(() => {
  cy.fixture("loginData").then((data) => {
    testData = data;
  });
  cy.fixture(`${Cypress.env("environment")}/users`).then((data) => {
  cy.log(data.email);
});

});

Given("user is on login page", () => {
  loginPage.visit();
});

When("user logs in with {string} credentials", (userType) => {
  //read username and password from fixture data
  loginPage.enterUsername(testData[userType].username);
  loginPage.enterPassword(testData[userType].password);
  loginPage.clickLogin();
});

Then("user should be redirected to dashboard", () => {
  cy.url().should("include", "/dashboard");
});

Then("error message should be displayed", () => {
  cy.get(".error-message").should("be.visible");
});

When("user logs in", () => {
  //Read Username and Password based on environment 
  cy.get("#username").type(Cypress.env("username"));
  cy.get("#password").type(Cypress.env("password"));
});
