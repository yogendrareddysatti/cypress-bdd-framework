/**
 * AlertActions
 * ------------
 * Handles JS alerts, confirms, prompts
 */
class AlertActions {

  /**
   * Automatically accept alert popup
   */
  static acceptAlert() {
    cy.on("window:alert", () => true);
  }

  /**
   * Accept confirmation popup
   */
  static acceptConfirm() {
    cy.on("window:confirm", () => true);
  }

  /**
   * Dismiss confirmation popup
   */
  static dismissConfirm() {
    cy.on("window:confirm", () => false);
  }

  /**
   * Validate alert message text
   */
  static verifyAlertText(expectedText) {
    cy.on("window:alert", (text) => {
      expect(text).to.eq(expectedText);
    });
  }
}

export default AlertActions;
