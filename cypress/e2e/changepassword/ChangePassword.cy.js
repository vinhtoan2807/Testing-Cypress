import ChangePasswordPage from "../../support/page/changepassword/ChangePassWord";
import LoginPage from "../../support/page/auth/LoginPage";

describe("Change Password Test", () => {
  const loginPage = new LoginPage();
  const changePassword = new ChangePasswordPage();

  let oldPassword, newPassword;

  before(() => {
    cy.fixture("data.json").then((account) => {
      oldPassword = account.password;
      newPassword = "Toan123@";
      loginPage.navigate(Cypress.config().baseUrl);
      loginPage.enterUserId(account.uid);
      loginPage.enterPassword(oldPassword);
      loginPage.handleClickLogin();
      loginPage.verifyLoginSuccessful();
    });
  });

  it("Should change the password successfully", () => {
    changePassword.navigateToChangePasswordPage();
    changePassword.enterOldPassword(oldPassword);
    changePassword.enterNewPassword(newPassword);
    changePassword.enterConfirmPassword(newPassword);
    changePassword.submitForm();
    cy.get("body").should("contain.text", "Password is Changed");
    cy.readFile("cypress/fixtures/data.json").then((data) => {
      data.password = newPassword;
      cy.writeFile("cypress/fixtures/data.json", data);
    });
  });
});
