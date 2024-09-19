import { faker } from "@faker-js/faker";

export const infoCustomer = {
  name: faker.person.firstName(),
  dob: faker.date.birthdate().toISOString().split("T")[0],
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  pinno: faker.finance.pin(6),
  telephoneno: faker.phone.number().replace(/\D/g, ""),
  email: faker.internet.email(),
  password: faker.internet.password(),
};
