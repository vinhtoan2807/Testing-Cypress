describe("Login Guru", () => {
  it("Get info", () => {
    cy.visit("https://demo.guru99.com");
    cy.get("input[name=emailid]").type("luuvinhtoan2807@gmail.com");
    cy.get("form").submit();
    cy.get("h4").should(
      "have.text",
      "Please take SCREESNSHOT of this page for future reference."
    );
  });
  it("Login successful", () => {
    cy.visit("https://demo.guru99.com/v4");
    cy.get("input[name=uid]").type("mngr589389");
    cy.get("input[name=password]").type("EgahamE");
    cy.get("form").submit();
    cy.get("td>.heading3").should(
      "have.text",
      "Welcome To Manager's Page of Guru99 Bank"
    );
  });
  it("Go to New Customer page", () => {
    cy.visit("https://demo.guru99.com/v4");
    cy.get("input[name=uid]").type("mngr589389");
    cy.get("input[name=password]").type("EgahamE");
    cy.get("form").submit();
    cy.get("td>.heading3").should(
      "have.text",
      "Welcome To Manager's Page of Guru99 Bank"
    );
    cy.contains("New Customer").click();
    cy.visit("https://demo.guru99.com/v4/manager/addcustomerpage.php");
    cy.get("p.heading3").should("have.text", "Add New Customer");
    cy.get("input[name=name]").type("Toan24");
    cy.get("input[type=date]").type("2000-01-22");
    cy.get("textarea").type("Hello");
    cy.get("input[name=city]").type("Da Nang");
    cy.get("input[name=state]").type("Thanh Khe");
    cy.get("input[name=pinno]").type("550000");
    cy.get("input[name=telephoneno]").type("0123456789");
    cy.get("input[name=emailid]").type("abc@gmail.com");
    cy.get("input[name=password]").type("abc123");
    cy.get("form").submit();
    cy.visit(
      "https://demo.guru99.com/v4/manager/CustomerRegMsg.php?cid={12032}"
    );
  });
  it("Go to Edit Customer", () => {
    cy.visit("https://demo.guru99.com/v4");
    cy.get("input[name=uid]").type("mngr589389");
    cy.get("input[name=password]").type("EgahamE");
    cy.get("form").submit();
    cy.get("td>.heading3").should(
      "have.text",
      "Welcome To Manager's Page of Guru99 Bank"
    );
    cy.contains("Edit Customer").click();
    cy.visit("https://demo.guru99.com/v4/manager/EditCustomer.php");
    cy.get("p.heading3").should("have.text", "Edit Customer Form");
    cy.get("input[name=cusid]").type("9523");
    cy.get("form").submit();
    cy.visit("https://demo.guru99.com/v4/manager/editCustomerPage.php");
  });
});
