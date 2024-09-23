import BasePage from "../BasePage";

export default class CreateCustomerPage extends BasePage {
  constructor() {
    super();
    this.customerPageUrl = "manager/addcustomerpage.php";
    this.customerNameField = 'input[name="name"]';
    this.dateOfBirthField = 'input[type="date"]';
    this.customerAddressField = 'textarea[name="addr"]';
    this.customerCityField = 'input[name="city"]';
    this.customerStateField = 'input[name="state"]';
    this.customerPinField = 'input[name="pinno"]';
    this.customerTelephoneField = 'input[name="telephoneno"]';
    this.customerEmailField = 'input[name="emailid"]';
    this.customerPasswordField = 'input[name="password"]';
    this.submitButton = "[type=submit]";
  }

  navigateToNewCustomerPage() {
    this.clickElement('a:contains("New Customer")');
  }

  enterCustomerName(name) {
    this.fillInput(this.customerNameField, name);
  }

  enterDateOfBirth(dob) {
    this.fillInput(this.dateOfBirthField, dob);
  }

  enterAddress(address) {
    this.fillInput(this.customerAddressField, address);
  }

  enterCity(city) {
    this.fillInput(this.customerCityField, city);
  }

  enterState(state) {
    this.fillInput(this.customerStateField, state);
  }

  enterPinNo(pinno) {
    this.fillInput(this.customerPinField, pinno);
  }

  enterTelephoneNo(telephoneno) {
    this.fillInput(this.customerTelephoneField, telephoneno);
  }

  enterEmail(email) {
    this.fillInput(this.customerEmailField, email);
  }

  enterPassword(password) {
    this.fillInput(this.customerPasswordField, password);
  }

  submitForm() {
    this.clickElement(this.submitButton);
  }

  verifyCustomerRegistered() {
    this.verifyText("td>.heading3", "Customer Registered Successfully!!!");
  }
  captureCustomerId() {
    cy.get('td:contains("Customer ID") + td')
      .invoke("text")
      .then((customerId) => {
        cy.wrap(customerId.trim()).as("customerId");
      });
  }
}
