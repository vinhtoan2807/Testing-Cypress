import DepositPage from "../../support/page/deposit/Deposit";
import LoginPage from "../../support/page/auth/LoginPage";
import { faker } from "@faker-js/faker";

describe("Deposit Functionality", () => {
  const loginPage = new LoginPage();
  const depositPage = new DepositPage();

  before(() => {
    cy.fixture("data.json").then((account) => {
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(account.password);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should a deposit successfully", () => {
    cy.fixture("data.json").then(({ accountId }) => {
      depositPage.navigateToDepositPage();
      depositPage.enterAccountId(accountId);
      depositPage.enterAmount(faker.number.int({ min: 500 }));
      depositPage.enterDesc(faker.lorem.paragraph(2));
      depositPage.submitForm();
    });
  });
});
