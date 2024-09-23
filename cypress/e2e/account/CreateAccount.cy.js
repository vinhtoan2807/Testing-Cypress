import LoginPage from "../../support/page/auth/LoginPage";
import CreateAccountPage from "../../support/page/account/CreateAccount";

describe("Create Account Test", () => {
  const loginPage = new LoginPage();
  const createAccount = new CreateAccountPage();

  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should create a new account", () => {
    cy.fixture("data.json").then(({ customerId }) => {
      createAccount.navigateToNewAccountPage();
      createAccount.enterCustomerId(customerId);
      createAccount.selectAccountType("Savings");
      createAccount.enterInitialDeposit("500");
      createAccount.submitForm();
      createAccount.verifyAccountCreated();
      createAccount.captureAccountId();
      cy.get("@accountId").then((accountId) => {
        cy.readFile("cypress/fixtures/data.json").then((data) => {
          data.accountId = accountId;
          cy.writeFile("cypress/fixtures/data.json", data);
        });
      });
    });
  });
});
