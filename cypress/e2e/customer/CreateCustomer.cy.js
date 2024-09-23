import LoginPage from "../../support/page/auth/LoginPage";
import CreateCustomerPage from "../../support/page/customer/CreateCustomer";
import { infoCustomer } from "../../fixtures/customerData";

describe("Create Customer Test", () => {
  const loginPage = new LoginPage();
  const addNewCustomer = new CreateCustomerPage();

  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should create a new customer", () => {
    addNewCustomer.navigateToNewCustomerPage();
    addNewCustomer.enterCustomerName(infoCustomer.name);
    addNewCustomer.enterDateOfBirth(infoCustomer.dob);
    addNewCustomer.enterAddress(infoCustomer.address);
    addNewCustomer.enterCity(infoCustomer.city);
    addNewCustomer.enterState(infoCustomer.state);
    addNewCustomer.enterPinNo(infoCustomer.pinno);
    addNewCustomer.enterTelephoneNo(infoCustomer.telephoneno);
    addNewCustomer.enterEmail(infoCustomer.email);
    addNewCustomer.enterPassword(infoCustomer.password);
    addNewCustomer.submitForm();
    addNewCustomer.verifyCustomerRegistered();

    addNewCustomer.captureCustomerId();
    cy.get("@customerId").then((customerId) => {
      cy.readFile("cypress/fixtures/data.json").then((data) => {
        data.customerId = customerId;
        cy.writeFile("cypress/fixtures/data.json", data);
      });
    });
  });
});
