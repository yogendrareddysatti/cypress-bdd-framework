/**
 * TableActions
 * ------------
 * Handles static & dynamic web tables
 */
class TableActions {

  /**
   * Get specific cell value using row & column index
   */
  static getCellValue(tableSelector, row, col) {
    return cy
      .get(tableSelector)
      .find("tr")
      .eq(row)
      .find("td")
      .eq(col);
  }

  /**
   * Click row based on cell text
   */
  static clickRowByText(tableSelector, text) {
    cy.get(tableSelector).contains("td", text).click();
  }

  /**
   * Verify table contains specific text
   */
  static verifyRowContains(tableSelector, text) {
    cy.get(tableSelector).contains("td", text).should("exist");
  }
}

export default TableActions;
