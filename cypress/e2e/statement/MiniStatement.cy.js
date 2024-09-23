import MiniStatementInput from "../../support/page/statement/MiniStatement";
import LoginPage from "../../support/page/auth/LoginPage";
describe("Balance Enquiry Test", () => {
  const loginPage = new LoginPage();
  const miniStatement = new MiniStatementInput();
  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should a mini statement successfully", () => {
    cy.fixture("data.json").then(({ accountId }) => {
      miniStatement.navigateToMiniStatementPage();
      miniStatement.enterAccountId(accountId);
      miniStatement.submitForm();
    });
  });
});
