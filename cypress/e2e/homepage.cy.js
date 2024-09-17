import { createCustomerPage } from "../support/page/customer/AddCustomer.cy";
import { faker } from "@faker-js/faker";

describe("Happy Case", () => {
  it("Create New Customer", () => {
    let infoCustomer = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };
    const addNewCustomer = new createCustomerPage();
    addNewCustomer.createCustomer(infoCustomer);
  });
});
