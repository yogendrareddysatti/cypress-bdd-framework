/**
 * IframeActions
 * -------------
 * Cypress cannot directly access iframe DOM
 * This method safely wraps iframe body
 */
class IframeActions {

  /**
   * Returns iframe body wrapped as Cypress object
   */
  static getIframeBody(iframeSelector) {
    return cy
      .get(iframeSelector)
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
  }
}

export default IframeActions;
