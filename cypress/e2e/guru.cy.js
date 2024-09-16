describe("Login Guru", () => {
  it("passes", () => {
    cy.visit("https://demo.guru99.com");
    cy.get("input[name=emailid").type("luuvinhtoan2807@gmail.com");
    cy.get("form").submit();
    cy.get("h4").should(
      "have.text",
      "Please take SCREESNSHOT of this page for future reference."
    );
  });
  it("passes", () => {
    cy.visit("https://demo.guru99.com/v4");
    cy.get("input[name=uid").type("mngr589389");
    cy.get("input[name=password").type("EgahamE");
    cy.get("form").submit();
    cy.get("td>.heading3").should(
      "have.text",
      "Welcome To Manager's Page of Guru99 Bank"
    );
  });
});
