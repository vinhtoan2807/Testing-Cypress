import BasePage from "../BasePage";

export default class MiniStatementPage extends BasePage {
  constructor() {
    super();
    this.miniStatementPageUrl = "manager/MiniStatementInput.php";
    this.accountIdField = 'input[name="accountno"]';
    this.submitButton = "[type=submit]";
  }
  navigateToMiniStatementPage = () => {
    this.clickElement('a:contains("Mini Statement")');
    this.navigate(this.miniStatementPageUrl);
  };
  enterAccountId(accountId) {
    this.fillInput(this.accountIdField, accountId);
  }
  submitForm() {
    this.clickElement(this.submitButton);
  }
}
