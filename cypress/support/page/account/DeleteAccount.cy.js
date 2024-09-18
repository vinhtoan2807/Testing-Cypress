export class deleteAccountPage {
  deleteAccount = (accountId) => {
    cy.get(".menusubnav")
      .contains("Delete Account")
      .should("be.visible")
      .click();
    cy.visit("manager/deleteAccountInput.php");
    cy.get('input[name="accountno"]').type(accountId);
    cy.get('input[name="AccSubmit"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Do you really want to delete this Customer?");
    });
    cy.on("window:confirm", () => true);
  };
}
