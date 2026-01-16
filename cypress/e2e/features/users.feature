Feature: Users API

Scenario: Get users list
  Given the API is available
  When I send a GET request to "/users"
  Then the response status should be 200
  And the response body should not be empty

Scenario: Create user
  Given the API is available
  When I send a POST request to "/users" with fixture "api/createUser"
  Then the response status should be 201
