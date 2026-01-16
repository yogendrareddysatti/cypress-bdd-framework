class ApiClient {
  static sendRequest({
    method,
    endpoint,
    body = null,
    headers = {},
    qs = {},
    auth = null,
    failOnStatusCode = false
  }) {
    return cy.request({
      method,
      url: `${Cypress.env("apiUrl")}${endpoint}`,
      body,
      headers,
      qs,
      auth,
      failOnStatusCode
    });
  }
}

export default ApiClient;
