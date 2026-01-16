class ApiAssertions {

  static expectStatus(response, statusCode) {
    expect(response.status).to.eq(statusCode);
  }

  static expectBodyNotEmpty(response) {
    expect(response.body).to.not.be.empty;
  }

  static expectProperty(response, property) {
    expect(response.body).to.have.property(property);
  }

  static expectArray(response) {
    expect(response.body).to.be.an("array");
  }

  static expectSchema(response, schema) {
    // optional: add AJV later
    expect(response.body).to.have.all.keys(schema);
  }
}

export default ApiAssertions;
