import LoginPage from "../../support/page/auth/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.navigate(Cypress.config().baseUrl);
  });

  it("Should login successfully", () => {
    cy.fixture("data.json").then((account) => {
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });
});
