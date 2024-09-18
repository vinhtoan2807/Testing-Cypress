export class deleteCustomerPage {
  deleteCustomer = (customerId) => {
    cy.get(".menusubnav")
      .contains("Delete Customer")
      .should("be.visible")
      .click();
    cy.visit("manager/DeleteCustomerInput.php");
    cy.get('input[name="cusid"]').type(customerId);
    cy.get('input[name="AccSubmit"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Do you really want to delete this Customer?");
    });
    cy.on("window:confirm", () => true);
  };
}
