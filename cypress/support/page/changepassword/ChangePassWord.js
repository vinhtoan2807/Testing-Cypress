import BasePage from "../BasePage";

export default class ChangePasswordPage extends BasePage {
  constructor() {
    super();
    this.changePasswordPageUrl = "manager/PasswordInput.php";
    this.oldPwdField = 'input[name="oldpassword"]';
    this.newPwdField = 'input[name="newpassword"]';
    this.confirmPwdField = 'input[name="confirmpassword"]';
    this.submitButton = "[type=submit]";
  }
  navigateToChangePasswordPage = () => {
    this.clickElement('a:contains("Change Password")');
    this.navigate(this.changePasswordPageUrl);
  };
  enterOldPassword(oldPwd) {
    this.fillInput(this.oldPwdField, oldPwd);
  }
  enterNewPassword(newPwd) {
    this.fillInput(this.newPwdField, newPwd);
  }
  enterConfirmPassword(confirmPwd) {
    this.fillInput(this.confirmPwdField, confirmPwd);
  }
  submitForm() {
    this.clickElement(this.submitButton);
  }
}
