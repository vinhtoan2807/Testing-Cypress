import BasePage from "../BasePage";

export default class WithDrawalPage extends BasePage {
  constructor() {
    super();
    this.withDrawalPageUrl = "manager/WithdrawalInput.php";
    this.accountIdField = 'input[name="accountno"]';
    this.amountField = 'input[name="ammount"]';
    this.descField = 'input[name="desc"]';
    this.submitButton = "[type=submit]";
  }
  navigateToWithDrawalPage = () => {
    this.clickElement('.menusubnav:contains("Deposit")');
    this.navigate(this.withDrawalPageUrl);
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
