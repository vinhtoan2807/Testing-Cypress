import BasePage from "../BasePage";

export default class Logout extends BasePage {
  constructor() {
    super();
    this.logoutPageUrl = "manager/Logout.php";
  }
  navigateToLogout = () => {
    this.clickElement('a:contains("Log out")');
    this.navigate(this.logoutPageUrl);
  };
  logout = () => {
    cy.on("window:confirm", () => true);
  };
  verifyLogoutSuccess = () => {
    this.verifyText("You Have Succesfully Logged Out!!");
  };
}
