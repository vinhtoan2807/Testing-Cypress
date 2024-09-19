import BasePage from "../BasePage";

export default class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.userIdField = 'input[name="uid"]';
    this.passwordField = 'input[name="password"]';
    this.loginButton = 'input[name="btnLogin"]';
  }

  enterUserId(uid) {
    this.fillInput(this.userIdField, uid);
  }

  enterPassword(password) {
    this.fillInput(this.passwordField, password);
  }

  handleClickLogin() {
    this.clickElement(this.loginButton);
  }

  verifyLoginSuccessful() {
    this.verifyText("td>.heading3", "Welcome To Manager's Page of Guru99 Bank");
  }
}
