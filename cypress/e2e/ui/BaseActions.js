/**
 * BaseActions
 * -----------
 * This is the foundation layer.
 * All common Cypress commands are wrapped here
 * so other action classes can reuse them.
 */
class BaseActions {

  /**
   * Get a DOM element using a CSS selector
   * Cypress automatically retries until element is found
   */
  static get(selector) {
    return cy.get(selector);
  }

  /**
   * Find element by visible text
   * Useful when selector is dynamic or unknown
   */
  static contains(text) {
    return cy.contains(text);
  }

  /**
   * Explicit wait (should be avoided unless necessary)
   * Cypress already has automatic waiting
   */
  static wait(ms) {
    cy.wait(ms);
  }

  /**
   * Log message to Cypress Test Runner
   */
  static log(message) {
    cy.log(message);
  }
}

export default BaseActions;
