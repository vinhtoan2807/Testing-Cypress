import { infoCustomer } from "../../fixtures/customerData";
import EditCustomerPage from "../../support/page/customer/EditCustomer";
import LoginPage from "../../support/page/auth/LoginPage";

describe("Edit Customer Test", () => {
  const loginPage = new LoginPage();
  const editCustomer = new EditCustomerPage();

  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should edit an existing customer", () => {
    cy.fixture("data.json").then(({ customerId }) => {
      editCustomer.navigateToEditCustomerPage();
      editCustomer.enterCustomerId(customerId);
      editCustomer.submitCustomerId();
      editCustomer.updateAddress(infoCustomer.address);
      editCustomer.updateCity(infoCustomer.city);
      editCustomer.updateState(infoCustomer.state);
      editCustomer.updatePinNo(infoCustomer.pinno);
      editCustomer.updateTelephoneNo(infoCustomer.telephoneno);
      editCustomer.updateEmail(infoCustomer.email);
      editCustomer.submitForm();
    });
  });
});
