describe('Reset and Complete Password', () => {
  it('sholud type email and toast disappear after few time button clicked', () => {
    cy.visit('/reset');
    cy.get('#email')
      .type('andela@andela.com')
      .should('have.value', 'andela@andela.com');
    cy.get('#sendEmail').click();
    cy.wait(1000);
    cy.get('.Toastify').should('not.be.visible');
  });
  it('sholud type passwords and toast disappear after few time button clicked', () => {
    cy.visit('/completReset/token');
    cy.get('#newPassword')
      .type('Password@123')
      .should('have.value', 'Password@123');
    cy.get('#confirmNewPassword')
      .type('Password@123')
      .should('have.value', 'Password@123');
  });
});
