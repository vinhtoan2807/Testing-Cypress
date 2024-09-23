import LoginPage from "../../support/page/auth/LoginPage";
import DeleteAccountPage from "../../support/page/account/DeleteAccount";

describe("Delete Account Test", () => {
  const loginPage = new LoginPage();
  const deleteAccount = new DeleteAccountPage();

  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should delete an existing account", () => {
    cy.fixture("data.json").then(({ accountId }) => {
      deleteAccount.deleteAccount(accountId);
    });
  });
});
