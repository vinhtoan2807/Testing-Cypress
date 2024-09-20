import BasePage from "../BasePage";

export default class EditCustomerPage extends BasePage {
  constructor() {
    super();
    this.editCustomerPageUrl = "manager/EditCustomer.php";
    this.customerIdField = 'input[name="cusid"]';
    this.submitCustomerIdButton = 'input[name="AccSubmit"]';
    this.customerAddressField = 'textarea[name="addr"]';
    this.customerCityField = 'input[name="city"]';
    this.customerStateField = 'input[name="state"]';
    this.customerPinField = 'input[name="pinno"]';
    this.customerTelephoneField = 'input[name="telephoneno"]';
    this.customerEmailField = 'input[name="emailid"]';
    this.submitButton = "[type=submit]";
  }

  navigateToEditCustomerPage() {
    this.clickElement('a:contains("Edit Customer")');
    this.navigate(this.editCustomerPageUrl);
  }

  enterCustomerId(customerId) {
    this.fillInput(this.customerIdField, customerId);
  }

  submitCustomerId() {
    this.clickElement(this.submitCustomerIdButton);
  }

  updateAddress(address) {
    this.fillInput(this.customerAddressField, address);
  }

  updateCity(city) {
    this.fillInput(this.customerCityField, city);
  }

  updateState(state) {
    this.fillInput(this.customerStateField, state);
  }

  updatePinNo(pinno) {
    this.fillInput(this.customerPinField, pinno);
  }

  updateTelephoneNo(telephoneno) {
    this.fillInput(this.customerTelephoneField, telephoneno);
  }

  updateEmail(email) {
    this.fillInput(this.customerEmailField, email);
  }

  submitForm() {
    this.clickElement(this.submitButton);
  }
}
