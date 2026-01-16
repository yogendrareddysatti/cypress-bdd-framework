/**
 * WaitActions
 * -----------
 * Smart waiting strategies
 * Avoid cy.wait() whenever possible
 */
class WaitActions {

  /**
   * Wait until element becomes visible
   */
  static waitForVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  /**
   * Wait for API call using alias
   */
  static waitForApi(alias) {
    cy.wait(alias);
  }
}

export default WaitActions;
