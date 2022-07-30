const arrayWords = [
    "AGGIUNGI AL CARRELLO",
    "AGGIUNGI AL BASKET",
    "AGGIUNGI",
    "ADD TO CART"
];

const PRODUCT_URL = "https://shop.pastagarofalo.it/it/mix-farine-7kg/";
const CART_URL = "https://shop.pastagarofalo.it/it/cart/";
const WAIT_TIME = 800;

it("Sneak Into Basket", () => {
    cy.visit(PRODUCT_URL)
        .wait(WAIT_TIME)
        .get("button")
        .then((e) => {
            Cypress.$(e).each((_, element) => {
                arrayWords.forEach((word) => {
                    if (
                        Cypress.$(element).text().toUpperCase().includes(word)
                    ) {
                        cy.wrap(element).click({ force: true });
                    }
                });
            });
        })
        .wait(700)
        .visit(CART_URL)
        .wait(WAIT_TIME)
        .screenshot("screenshot", { capture: "viewport" });
});
