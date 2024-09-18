import { createCustomerPage } from "../customer/AddCustomer.cy";
export class createAccountPage {
  createAccount = (infoCustomer) => {
    const preCreateCustomerPage = new createCustomerPage();
    preCreateCustomerPage.createCustomer(infoCustomer);
    cy.get("@customerId").then((customerId) => {
      cy.get(".menusubnav").contains("New Account").click({ force: true });
      cy.visit("manager/addAccount.php");
      cy.get('input[name="cusid"]').type(customerId);
      cy.get("select").select("Savings").should("have.value", "Savings");
      cy.get('input[name="inideposit"]').type("500");
      cy.get("form").submit();
      cy.get("td>.heading3").should(
        "have.text",
        "Account Generated Successfully!!!"
      );
      cy.get('td:contains("Account ID") + td').then(($accountId) => {
        const accountId = $accountId.text();
        cy.wrap(accountId).as("accountId");
      });
    });
  };
}
