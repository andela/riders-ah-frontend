/* eslint-disable no-undef */
describe("end-to-end sample test", () => {
  it("visit google.com", () => {
    cy.visit("https://www.google.com");
    cy.get(".gLFyf")
      .type("andela")
      .should("have.value", "andela");
    cy.contains("Google Search").click();
  });
});
