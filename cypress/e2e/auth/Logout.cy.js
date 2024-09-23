import LoginPage from "../../support/page/auth/LoginPage";

describe("Logout Test", () => {
  const loginPage = LoginPage();
  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });
  it("should log out the user", () => {
    loginPage.logOutFunc();
    loginPage.verifyLogoutSuccess();
  });
});
