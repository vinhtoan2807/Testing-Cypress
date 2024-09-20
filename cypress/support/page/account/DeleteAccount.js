import BasePage from "../BasePage";

export default class DeleteAccountPage extends BasePage {
  constructor() {
    super();
    this.deleteAccountPageUrl = "manager/deleteAccountInput.php";
    this.accountIdField = 'input[name="accountno"]';
    this.submitButton = 'input[name="AccSubmit"]';
  }

  navigateToDeleteAccountPage() {
    this.clickElement('a:contains("Delete Account")');
    this.navigate(this.deleteAccountPageUrl);
  }

  enterAccountId(accountId) {
    this.fillInput(this.accountIdField, accountId);
  }

  submitDeleteAccount() {
    this.clickElement(this.submitButton);
  }

  confirmDeleteAlert() {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Do you really want to delete this Account?");
    });
    cy.on("window:confirm", () => true);
  }

  deleteAccount(accountId) {
    this.navigateToDeleteAccountPage();
    this.enterAccountId(accountId);
    this.submitDeleteAccount();
    this.confirmDeleteAlert();
  }
}
