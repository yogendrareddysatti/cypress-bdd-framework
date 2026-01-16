/**
 * DatePickerActions
 * -----------------
 * Generic date picker handling
 */
class DatePickerActions {

  /**
   * Type date directly into input
   * Works when input is editable
   */
  static selectDate(inputSelector, date) {
    cy.get(inputSelector).clear().type(date);
  }

  /**
   * Click date from calendar widget
   */
  static selectFromCalendar(day) {
    cy.contains(day).click();
  }
}

export default DatePickerActions;
