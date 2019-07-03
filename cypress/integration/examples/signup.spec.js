/* eslint-disable no-undef */
describe("end-to-end sample test", () => {
    it("Signup a user", () => {
      cy.visit("/signup");
      cy.get("#username")
        .type("username")
        .should("have.value", "username");
      cy.get("#email")
        .type("email@account.com")
        .should("have.value", "email@account.com");
      cy.get("#password")
        .type("Password@123!")
        .should("have.value", "Password@123!");
      cy.get(".input").click();
      cy.get(".Toastify").its('length').should("be.gte", 0);
    });
  });
