/**
 * ShadowDomActions
 * ----------------
 * Used when elements are inside Shadow DOM
 */
class ShadowDomActions {

  /**
   * Access element inside shadow root
   */
  static getShadowElement(hostSelector, elementSelector) {
    return cy.get(hostSelector).shadow().find(elementSelector);
  }
}

export default ShadowDomActions;
