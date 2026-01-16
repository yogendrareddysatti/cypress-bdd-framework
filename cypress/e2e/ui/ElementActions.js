import BaseActions from "./BaseActions";

/**
 * ElementActions
 * --------------
 * Handles basic UI elements:
 * buttons, inputs, checkboxes, radios, dropdowns
 */
class ElementActions {

  /**
   * Click on an element
   */
  static click(selector) {
    BaseActions.get(selector).click();
  }

  /**
   * Clear existing text and type new value
   * Best practice for input fields
   */
  static type(selector, text) {
    BaseActions.get(selector).clear().type(text);
  }

  /**
   * Clear input field
   */
  static clear(selector) {
    BaseActions.get(selector).clear();
  }

  /**
   * Check a checkbox or radio button
   */
  static check(selector) {
    BaseActions.get(selector).check();
  }

  /**
   * Uncheck a checkbox
   */
  static uncheck(selector) {
    BaseActions.get(selector).uncheck();
  }

  /**
   * Select value from dropdown
   * Works with <select> elements
   */
  static selectDropdown(selector, value) {
    BaseActions.get(selector).select(value);
  }

  /**
   * Upload a file using input[type=file]
   */
  static uploadFile(selector, filePath) {
    BaseActions.get(selector).selectFile(filePath);
  }

  /**
   * Assert element visibility
   */
  static isVisible(selector) {
    BaseActions.get(selector).should("be.visible");
  }
}

export default ElementActions;
