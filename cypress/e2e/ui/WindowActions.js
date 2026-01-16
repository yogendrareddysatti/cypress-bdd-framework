/**
 * WindowActions
 * -------------
 * Cypress does NOT support real multiple tabs
 * These are standard workarounds
 */
class WindowActions {

  /**
   * Remove target="_blank" so link opens in same tab
   */
  static openNewTabSameWindow(selector) {
    cy.get(selector).invoke("removeAttr", "target").click();
  }

  /**
   * Stub window.open() to verify new window intent
   */
  static stubWindowOpen() {
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen");
    });
  }

  /**
   * Verify that window.open() was called
   */
  static verifyNewWindowOpened() {
    cy.get("@windowOpen").should("be.called");
  }
}

export default WindowActions;
