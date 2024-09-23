import BasePage from "../BasePage";

export default class CreateAccountPage extends BasePage {
  constructor() {
    super();
    this.accountPageUrl = "manager/addAccount.php";
    this.accountIdField = 'input[name="cusid"]';
    this.accountTypeField = 'select[name="selaccount"]';
    this.initialDepositField = 'input[name="inideposit"]';
    this.submitButton = "[type=submit]";
  }

  navigateToNewAccountPage() {
    this.clickElement('a:contains("New Account")');
  }

  enterCustomerId(customerId) {
    cy.get(this.accountIdField).type(customerId);
  }

  selectAccountType(accountType) {
    cy.get(this.accountTypeField).select(accountType);
  }

  enterInitialDeposit(amount) {
    cy.get(this.initialDepositField).type(amount);
  }

  submitForm() {
    this.clickElement(this.submitButton);
  }

  verifyAccountCreated() {
    this.verifyText("td>.heading3", "Account Generated Successfully!!!");
  }

  captureAccountId() {
    cy.get('td:contains("Account ID") + td')
      .invoke("text")
      .then((accountId) => {
        cy.wrap(accountId.trim()).as("accountId");
      });
  }
}
