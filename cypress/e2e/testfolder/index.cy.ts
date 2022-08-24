/* eslint-disable cypress/no-unnecessary-waiting */
const arrayWords = [
  'AGGIUNGI AL CARRELLO',
  'AGGIUNGI AL BASKET',
  'AGGIUNGI',
  'ADD TO CART',
  'ADD TO MY CART',
  'ADD TO BASKET',
  'ADD TO MY BASKET',
];

const WAIT_TIME = 800;

it('Sneak Into Basket', () => {
  cy.visit(Cypress.env('productUrl'))
    .wait(WAIT_TIME)
    .get('button')
    .then((e) => {
      Cypress.$(e).each((_, element) => {
        arrayWords.forEach((word) => {
          if (Cypress.$(element).text().toUpperCase().includes(word)) {
            cy.wrap(element).click({ force: true });
          }
        });
      });
    })
    .wait(WAIT_TIME)
    .visit(Cypress.env('cartUrl'))
    .wait(WAIT_TIME)
    .screenshot('screenshot', { capture: 'viewport' });
});
