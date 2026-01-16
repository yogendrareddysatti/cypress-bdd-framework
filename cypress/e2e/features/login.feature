Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given user is on login page
    When user logs in with "validUser" credentials
    Then user should be redirected to dashboard

  Scenario: Login fails with invalid credentials
    Given user is on login page
    When user logs in with "invalidUser" credentials
    Then error message should be displayed

