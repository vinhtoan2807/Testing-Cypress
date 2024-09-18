export class editAccountPage {
  editAccount = (accountId) => {
    cy.get(".menusubnav").contains("Edit Account").click();
    cy.visit("manager/editAccount.php");
    cy.get('input[name="accountno"]').type(accountId);
    cy.get('input[name="AccSubmit"]').click();
    cy.wait(1000);
    cy.visit("manager/Managerhomepage.php");
  };
}
