export class BasePage {
  navigate(url) {
    cy.visit(url);
  }

  clickElement(selector) {
    cy.get(selector).click();
  }

  fillInput(selector, value) {
    cy.get(selector).type(value);
  }

  verifyText(selector, text) {
    cy.get(selector).should("contain.text", text);
  }
  logOutFunc = () => {
    this.clickElement('a:contains("Log out")');
    cy.on("window:confirm", () => true);
  };
  verifyLogoutSuccess = () => {
    this.verifyText("You Have Succesfully Logged Out!!");
  };
}
