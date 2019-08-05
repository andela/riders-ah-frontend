/* eslint-disable no-undef */
describe('end-to-end sample test', () => {
  it('visit /login', () => {
    cy.visit('/login');
    cy.get('#email')
      .type('ikabalisa20@gmail.com')
      .should('have.value', 'ikabalisa20@gmail.com');
    cy.get('#password')
      .type('password')
      .should('have.value', 'password');
  });
});
