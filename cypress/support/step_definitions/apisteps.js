import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ApiHelpers from "../../e2e/apis/apiHelpers";
import ApiAssertions from "../../e2e/apis/apiAssertions";
import world from "../world";

Given("the API is available", () => {});

When("I send a GET request to {string}", (endpoint) => {
  ApiHelpers.get(endpoint).then((res) => {
    world.response = res;
  });
});

When("I send a POST request to {string} with fixture {string}", (endpoint, fixture) => {
  cy.fixture(fixture).then((payload) => {
    ApiHelpers.post(endpoint, payload).then((res) => {
      world.response = res;
    });
  });
});

Then("the response status should be {int}", (statusCode) => {
  ApiAssertions.expectStatus(world.response, statusCode);
});

Then("the response body should not be empty", () => {
  ApiAssertions.expectBodyNotEmpty(world.response);
});
