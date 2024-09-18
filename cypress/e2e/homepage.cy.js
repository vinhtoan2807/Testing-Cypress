import { createCustomerPage } from "../support/page/customer/AddCustomer.cy";
import { editCustomerPage } from "../support/page/customer/EditCustomer.cy";
import { faker } from "@faker-js/faker";

describe("Happy Case", () => {
  it("Home page", () => {
    const infoCustomer = {
      name: faker.person.firstName(),
      dob: faker.date.birthdate().toISOString().split("T")[0],
      city: faker.location.city(),
      state: faker.location.state(),
      pinno: faker.finance.pin(6),
      email: faker.internet.email(),
    };
    const addNewCustomer = new createCustomerPage();
    const editExistingCustomer = new editCustomerPage();
    addNewCustomer.createCustomer(infoCustomer);
    cy.get("@customerId").then((customerId) => {
      const updatedInfoCustomer = {
        city: faker.location.city(),
        state: faker.location.state(),
        pinno: faker.finance.pin(6),
        telephoneno: faker.phone.number(),
        email: faker.internet.email(),
      };
      editExistingCustomer.editCustomer(customerId, updatedInfoCustomer);
    });
  });
});
