import axios from "axios";
import { load } from "cheerio";

it("Sneak Into Basket", () => {
    cy.viewport(1280, 720).visit(
        "https://www.valentinienoteca.it/2137-bulldog-cl100.html"
    );
    cy.get("button")
        .contains("Aggiungi al carrello")
        .click({ force: true })
        .wait(2000)
        .visit("https://www.valentinienoteca.it/carrello?action=show");
    cy.viewport(1280, 720)
        .screenshot("screenshot")
        .then((s) => {
            console.log(s);
        });
});

/**
 * 1. Input pagina prodotto e pagina carrello
 * 2. Cypress aggiungere 1 prodotto al carrello
 * 3. Navigare pagina carrello
 * 4. Screenshot pagina carrello
 * 5. Tensorflow classificazione
 */
