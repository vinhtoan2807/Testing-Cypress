export class createCustomerPage {
  createCustomer = (infoCustomer) => {
    cy.contains("New Customer").click();
    cy.visit("manager/addcustomerpage.php");
    cy.get('input[name="name"]').type(infoCustomer.name);
    cy.get('input[type="date"]').type(infoCustomer.dob);
    cy.get("textarea").type("Hello");
    cy.get('input[name="city"]').type(infoCustomer.city);
    cy.get('input[name="state"]').type(infoCustomer.state);
    cy.get('input[name="pinno"]').type(infoCustomer.pinno);
    cy.get('input[name="telephoneno"]').type(infoCustomer.telephoneno);
    cy.get('input[name="emailid"]').type(infoCustomer.email);
    cy.get('input[name="password"]').type("abc123");
    cy.get("form").submit();
    cy.get("td>.heading3").should(
      "have.text",
      "Customer Registered Successfully!!!"
    );
    cy.get('td:contains("Customer ID") + td').then(($customerId) => {
      const customerId = $customerId.text();
      cy.wrap(customerId).as("customerId");
    });
  };
}
