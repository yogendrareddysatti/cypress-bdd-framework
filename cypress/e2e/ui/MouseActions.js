/**
 * MouseActions
 * ------------
 * Handles advanced mouse interactions
 */
class MouseActions {

  /**
   * Hover over an element
   * Cypress does not have hover by default
   * so we trigger mouseover event
   */
  static hover(selector) {
    cy.get(selector).trigger("mouseover");
  }

  /**
   * Right-click on element
   */
  static rightClick(selector) {
    cy.get(selector).rightclick();
  }

  /**
   * Double click on element
   */
  static doubleClick(selector) {
    cy.get(selector).dblclick();
  }

  /**
   * Drag and drop simulation
   * Works for most basic HTML drag-drop
   */
  static dragAndDrop(source, target) {
    cy.get(source).trigger("mousedown", { which: 1 });
    cy.get(target).trigger("mousemove").trigger("mouseup");
  }
}

export default MouseActions;
