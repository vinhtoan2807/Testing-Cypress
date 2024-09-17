const { loginPage } = require("../login/login.cy");
export class createCustomerPage {
  createCustomer = (infoCustomer) => {
    const loginSuccess = new loginPage();
    loginSuccess.loginSuccessful();
    cy.contains("New Customer").click();
    cy.visit("https://demo.guru99.com/v4/manager/addcustomerpage.php");
    cy.get('input[name="name"]').type(infoCustomer.name);
    cy.get('input[type="date"]').type("2000-01-22");
    cy.get("textarea").type("Hello");
    cy.get('input[name="city"]').type("Da Nang");
    cy.get('input[name="state"]').type("Thanh Khe");
    cy.get('input[name="pinno"]').type("550000");
    cy.get('input[name="telephoneno"]').type("0123456789");
    cy.get('input[name="emailid"]').type(infoCustomer.email);
    cy.get('input[name="password"]').type("abc123");
    cy.get("form").submit();
    cy.get("td>.heading3").should(
      "have.text",
      "Customer Registered Successfully!!!"
    );
  };
}
