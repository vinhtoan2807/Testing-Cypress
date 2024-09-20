import BasePage from "../BasePage";

export default class CustomStatementPage extends BasePage {
  constructor() {
    super();
    this.customStatementPageUrl = "manager/CustomisedStatementInput.php";
    this.accountIdField = 'input[name="accountno"]';
    this.fromDateField = 'input[name="fdate"]';
    this.toDateField = 'input[name="tdate"]';
    this.miniTransValueField = 'input[name="amountlowerlimit"]';
    this.numtransField = 'input[name="numtransaction"]';
    this.submitButton = 'input[name="AccSubmit"]';
  }

  navigateToCustomStatementPage() {
    this.clickElement('a:contains("Customised Statement")');
    this.navigate(this.customStatementPageUrl);
  }
  enterAccountId(accountId) {
    this.fillInput(this.accountIdField, accountId);
  }

  enterFromDate(fdate) {
    this.fillInput(this.fromDateField, fdate);
  }
  enterToDate(tdate) {
    this.fillInput(this.toDateField, tdate);
  }
  enterMiniTransValue(transvalue) {
    this.fillInput(this.miniTransValueField, transvalue);
  }
  enterNumTrans(numtrans) {
    this.fillInput(this.numtransField, numtrans);
  }
  submitForm() {
    this.clickElement(this.submitButton);
  }
}
