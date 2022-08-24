import express from 'express';
import * as path from 'path';
import cors from 'cors';

const launchHttpServer = () => {
  const app = express();
  const port = 3000;
  app.use(cors());
  app.get('/', (_, res) => {
    res.sendFile('screenshot.png', {
      root: path.resolve(process.cwd(), 'cypress', 'screenshots', 'index.cy.ts'),
    });
  });

  app.get('/send', (req, res) => {
    const { p1, p2 } = req.query;
    res.send('OK');
    console.log('1 Prodotto: ', p1);
    console.log('2 Prodotti: ', p2);
    process.exit();
  });
  app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
  });
};

export default launchHttpServer;
