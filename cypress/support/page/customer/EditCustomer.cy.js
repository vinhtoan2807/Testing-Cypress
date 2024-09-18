export class editCustomerPage {
  editCustomer = (customerId, updatedInfoCustomer) => {
    cy.get(".menusubnav").contains("Edit Customer").click();
    cy.visit("manager/EditCustomer.php");
    cy.get('input[name="cusid"]').type(customerId);
    cy.get('input[name="AccSubmit"]').click();
    cy.get('input[name="city"]').clear().type(updatedInfoCustomer.city);
    cy.get('input[name="state"]').clear().type(updatedInfoCustomer.state);
    cy.get('input[name="pinno"]').clear().type(updatedInfoCustomer.pinno);
    cy.get('input[name="telephoneno"]')
      .clear()
      .type(updatedInfoCustomer.telephoneno);
    cy.get('input[name="emailid"]').clear().type(updatedInfoCustomer.email);
    cy.get("form").submit();
  };
}
