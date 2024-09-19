import LoginPage from "../../support/page/auth/LoginPage";
import Logout from "../../support/page/auth/Logout";

describe("Logout Test", () => {
  const loginPage = LoginPage();
  const logOut = new Logout();
  before(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });
  it("should log out the user", () => {
    logOut.navigateToLogout();
    logOut.logout();
    logOut.verifyLogoutSuccess();
  });
});
