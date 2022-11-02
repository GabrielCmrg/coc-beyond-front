import { faker } from '@faker-js/faker';

describe('Test signup', () => {
  it('Should alert when account is created', () => {
    const password = faker.internet.password();
    const signupInfo = {
      email: faker.internet.email(),
      password,
      confirmPassword: password,
    };
    cy.visit('http://localhost:5173/signup');

    cy.get('[data-cy="email"]').type(signupInfo.email);
    cy.get('[data-cy="password"]').type(signupInfo.password);
    cy.get('[data-cy="confirm-password"]').type(signupInfo.confirmPassword);
    cy.intercept('POST', '/signup').as('createAccountRequest');
    cy.get('[data-cy="create-account-button"]').click();
    cy.wait('@createAccountRequest');

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Account created!');
      return true;
    });
    cy.url().should('equal', 'http://localhost:5173/');
  });
});
