import DeleteCustomerPage from "../../support/page/customer/DeleteCustomer";
import LoginPage from "../../support/page/auth/LoginPage";

describe("Delete Customer Test", () => {
  const loginPage = new LoginPage();
  const deleteCustomer = new DeleteCustomerPage();

  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should delete a customer", () => {
    cy.fixture("data.json").then(({ customerId }) => {
      deleteCustomer.deleteCustomer(customerId);
    });
  });
});
