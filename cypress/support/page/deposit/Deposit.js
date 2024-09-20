import BasePage from "../BasePage";

export default class DepositPage extends BasePage {
  constructor() {
    super();
    this.depositPageUrl = "manager/DepositInput.php";
    this.accountIdField = 'input[name="accountno"]';
    this.amountField = 'input[name="ammount"]';
    this.descField = 'input[name="desc"]';
    this.submitButton = "[type=submit]";
  }
  navigateToDepositPage = () => {
    this.clickElement('a:contains("Deposit")');
    this.navigate(this.depositPageUrl);
  };
  enterAccountId(accountId) {
    this.fillInput(this.accountIdField, accountId);
  }
  enterAmount(amount) {
    this.fillInput(this.amountField, amount);
  }
  enterDesc(desc) {
    this.fillInput(this.descField, desc);
  }
  submitForm() {
    this.clickElement(this.submitButton);
  }
}
