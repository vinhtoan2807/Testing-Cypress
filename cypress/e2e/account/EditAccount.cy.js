import EditAccountPage from "../../support/page/account/EditAccount";
import LoginPage from "../../support/page/auth/LoginPage";

describe("Edit Account Test", () => {
  const loginPage = new LoginPage();
  const editAccount = new EditAccountPage();

  before(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should edit an existing account", () => {
    cy.fixture("data.json").then(({ accountId }) => {
      editAccount.navigateToEditAccountPage();
      editAccount.enterAccountId(accountId);
      editAccount.submitAccountId();
    });
  });
});
