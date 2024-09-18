export class loginPage {
  loginSuccessful = () => {
    const accountLogin = {
      uid: "mngr589389",
      password: "abc123@",
    };
    cy.visit("https://demo.guru99.com/v4");
    cy.get('input[name="uid"]').type(accountLogin.uid);
    cy.get('input[name="password"]').type(accountLogin.password);
    cy.get("form").submit();
    cy.get("td>.heading3").should(
      "have.text",
      "Welcome To Manager's Page of Guru99 Bank"
    );
  };
}
