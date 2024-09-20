import LoginPage from "../../support/page/auth/LoginPage";
import CustomStatementPage from "../../support/page/statement/CustomStatement";
import { faker } from "@faker-js/faker";
describe("Create Customer Test", () => {
  const loginPage = new LoginPage();
  const customStatement = new CustomStatementPage();

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
      customStatement.navigateToCustomStatementPage();
      customStatement.enterAccountId(accountId);
      customStatement.enterFromDate(
        faker.date.past().toISOString().split("T")[0]
      );
      customStatement.enterToDate(
        faker.date.future().toISOString().split("T")[0]
      );
      customStatement.enterMiniTransValue(faker.number.int({ min: 1 }));
      customStatement.enterNumTrans(faker.number.int({ min: 1 }));
      customStatement.submitForm();
    });
  });
});
