describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Link to visit must be three', () => {
    cy.get('ul li')
      .its('length')
      .should('be.eq', 3);
  });
  it('Should go to login page', () => {
    cy.get('a#login')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'login');
  });
  it('Should go to Signup page', () => {
    cy.get('a#signup')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'signup');
  });
  it('Must have the video to display in the backgound', () => {
    cy.get('video source')
      .invoke('attr', 'src')
      .should('include', 'video');
  });
});
