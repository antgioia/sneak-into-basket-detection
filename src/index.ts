import * as path from "path";
import express from "express";
import cors from "cors";
import cypress from "cypress";
import * as puppeteer from "puppeteer";

(async () => {
  await cypress.run({
    spec: path.join("cypress", "e2e", "testfolder", "index.cy.ts"),
    browser: "chrome",
  });

  const app = express();
  const port = 3000;
  app.use(cors());

  app.get("/", (req, res) => {
    res.sendFile("screenshot.png", {
      root: __dirname + "..\\..\\..\\cypress\\screenshots\\index.cy.ts",
    });
  });

  app.get("/send", (req, res) => {
    const { p1, p2 } = req.query;
    res.send("OK");
    console.log("1Prodotto: ", p1);
    console.log("2Prodotti: ", p2);
    process.exit();
  });

  app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("file:///" + process.cwd() + "/index.html");
  });
})();

console.log("file:///" + process.cwd() + "/index.html");
