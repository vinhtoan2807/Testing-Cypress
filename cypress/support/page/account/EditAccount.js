import BasePage from "../BasePage";

export default class EditAccountPage extends BasePage {
  constructor() {
    super();
    this.editAccountPageUrl = "manager/editAccount.php";
    this.accountIdField = 'input[name="accountno"]';
    this.submitAccountIdButton = 'input[name="AccSubmit"]';
  }

  navigateToEditAccountPage() {
    this.clickElement('a:contains("Edit Account")');
  }

  enterAccountId(accountId) {
    this.fillInput(this.accountIdField, accountId);
  }

  submitAccountId() {
    this.clickElement(this.submitAccountIdButton);
  }
}
