import WithDrawalPage from "../../support/page/withdrawal/Withdrawal";
import LoginPage from "../../support/page/auth/LoginPage";
import { faker } from "@faker-js/faker";

describe("WithDrawal Test", () => {
  const loginPage = new LoginPage();
  const withDrawalPage = new WithDrawalPage();

  beforeEach(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should a withdrawal successfully", () => {
    cy.fixture("data.json").then(({ accountId }) => {
      withDrawalPage.navigateToWithDrawalPage();
      withDrawalPage.enterAccountId(accountId);
      withDrawalPage.enterAmount(faker.number.int({ min: 500 }));
      withDrawalPage.enterDesc(faker.lorem.paragraph(2));
      withDrawalPage.submitForm();
    });
  });
});
