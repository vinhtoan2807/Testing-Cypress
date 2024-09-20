import BalanceEnquiryPage from "../../support/page/enquiry/BalanceEnquiry";
import LoginPage from "../../support/page/auth/LoginPage";
describe("Balance Enquiry Test", () => {
  const loginPage = new LoginPage();
  const balanceEnquiry = new BalanceEnquiryPage();
  before(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should balance enquiry successfully", () => {
    cy.fixture("data.json").then(({ accountId }) => {
      balanceEnquiry.navigateToBalanceEnquiryPage();
      balanceEnquiry.enterAccountId(accountId);
      balanceEnquiry.submitForm();
    });
  });
});
