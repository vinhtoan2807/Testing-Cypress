import { loginPage } from "../support/page/login/LoginPage.cy";
import { createCustomerPage } from "../support/page/customer/AddCustomer.cy";
import { editCustomerPage } from "../support/page/customer/EditCustomer.cy";
import { deleteCustomerPage } from "../support/page/customer/DeleteCustomer.cy";
import { faker } from "@faker-js/faker";
import { createAccountPage } from "../support/page/account/AddAccount.cy";
import { editAccountPage } from "../support/page/account/EditAccount.cy";
import { deleteAccountPage } from "../support/page/account/DeleteAccount.cy";

describe("Happy Case", () => {
  it("Home page", () => {
    const loginSuccess = new loginPage();
    loginSuccess.loginSuccessful();
    const infoCustomer = {
      name: faker.person.firstName(),
      dob: faker.date.birthdate().toISOString().split("T")[0],
      city: faker.location.city(),
      state: faker.location.state(),
      pinno: faker.finance.pin(6),
      telephoneno: faker.phone.number().replace(/\D/g, ""),
      email: faker.internet.email(),
    };
    const addNewCustomer = new createCustomerPage();
    const editExistingCustomer = new editCustomerPage();
    const deleteExistingCustomer = new deleteCustomerPage();
    const addNewAccount = new createAccountPage();
    const editExistingAccount = new editAccountPage();
    const deleteExistingAccount = new deleteAccountPage();
    addNewCustomer.createCustomer(infoCustomer);
    cy.get("@customerId").then((customerId) => {
      const updatedInfoCustomer = {
        city: faker.location.city(),
        state: faker.location.state(),
        pinno: faker.finance.pin(6),
        telephoneno: faker.phone.number().replace(/\D/g, ""),
        email: faker.internet.email(),
      };
      editExistingCustomer.editCustomer(customerId, updatedInfoCustomer);
    });
    cy.get("@customerId").then((customerId) => {
      deleteExistingCustomer.deleteCustomer(customerId);
    });
    addNewAccount.createAccount(infoCustomer);
    cy.get("@accountId").then((accountId) => {
      editExistingAccount.editAccount(accountId);
    });
    cy.get("@accountId").then((accountId) => {
      deleteExistingAccount.deleteAccount(accountId);
    });
  });
});
