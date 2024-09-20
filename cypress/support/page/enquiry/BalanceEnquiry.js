import BasePage from "../BasePage";

export default class BalanceEnquiryPage extends BasePage {
  constructor() {
    super();
    this.balanceEnquiryPageUrl = "manager/BalEnqInput.php";
    this.accountIdField = 'input[name="accountno"]';
    this.submitButton = "[type=submit]";
  }
  navigateToBalanceEnquiryPage = () => {
    this.clickElement('a:contains("Balance Enquiry")');
    this.navigate(this.balanceEnquiryPageUrl);
  };
  enterAccountId(accountId) {
    this.fillInput(this.accountIdField, accountId);
  }
  submitForm() {
    this.clickElement(this.submitButton);
  }
}
