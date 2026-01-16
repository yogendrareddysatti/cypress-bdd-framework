import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ElementActions from "../../e2e/ui/ElementActions";
import WindowActions from "../../e2e/ui/WindowActions";

Given("user clicks on login button", () => {
  ElementActions.click("#loginBtn");
});

When("user enters username {string}", (username) => {
  ElementActions.type("#username", username);
});

Then("new page should open in same tab", () => {
  WindowActions.verifyNewWindowOpened();
});
