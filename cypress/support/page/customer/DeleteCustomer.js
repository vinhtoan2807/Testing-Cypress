import BasePage from "../BasePage";

export default class DeleteCustomerPage extends BasePage {
  constructor() {
    super();
    this.deleteCustomerPageUrl = "manager/DeleteCustomerInput.php";
    this.customerIdField = 'input[name="cusid"]';
    this.submitButton = 'input[name="AccSubmit"]';
  }

  navigateToDeleteCustomerPage() {
    this.clickElement('a:contains("Delete Customer")');
    this.navigate(this.deleteCustomerPageUrl);
    console.log(`Navigating to: ${this.deleteCustomerPageUrl}`);
  }

  enterCustomerId(customerId) {
    this.fillInput(this.customerIdField, customerId);
  }

  submitDeleteCustomer() {
    this.clickElement(this.submitButton);
  }

  confirmDeleteAlert() {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Do you really want to delete this Customer?");
    });
    cy.on("window:confirm", () => true);
  }

  deleteCustomer(customerId) {
    this.navigateToDeleteCustomerPage();
    this.enterCustomerId(customerId);
    this.submitDeleteCustomer();
    this.confirmDeleteAlert();
  }
}
