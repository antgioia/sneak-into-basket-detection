const arrayWords = [
  "AGGIUNGI AL CARRELLO",
  "AGGIUNGI AL BASKET",
  "AGGIUNGI",
  "ADD TO CART",
];

it("Sneak Into Basket", () => {
  cy.visit("https://shop.pastagarofalo.it/it/mix-farine-7kg/");
  cy.wait(2000);
  cy.get("button")
    .then((e) => {
      Cypress.$(e).each((i, element) => {
        arrayWords.forEach((word) => {
          if (Cypress.$(element).text().toUpperCase().includes(word)) {
            cy.wrap(element).click({ force: true });
          }
        });
      });
    })
    .wait(1000);
  cy.visit("https://shop.pastagarofalo.it/it/cart/")
    .wait(2000)
    .screenshot("screenshot", { capture: "viewport" });
});

/**
 * 1. Input pagina prodotto e pagina carrello
 * 2. Cypress aggiungere 1 prodotto al carrello
 * 3. Navigare pagina carrello
 * 4. Screenshot pagina carrello
 * 5. Tensorflow classificazione
 */
