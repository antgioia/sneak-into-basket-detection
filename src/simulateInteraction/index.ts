import * as path from 'path';
import cypress from 'cypress';

const simulateInteraction = async (productUrl: string, cartUrl: string) => {
  await cypress
    .run({
      spec: path.join('cypress', 'e2e', 'testfolder', 'index.cy.ts'),
      browser: 'chrome',
      config: {
        video: false,
      },
      env: {
        productUrl,
        cartUrl,
      },
    })
    .catch((e) => {
      console.error("Errore nell'interazione con la pagina");
      console.error(e);
    });
};

export default simulateInteraction;
