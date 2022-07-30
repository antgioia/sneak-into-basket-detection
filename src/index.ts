import * as path from "path";
import express from "express";
import cors from "cors";
import cypress from "cypress";
import * as puppeteer from "puppeteer";

(async () => {
    const launchHttpServer = () => {
        const app = express();
        const port = 3000;
        app.use(cors());
        app.get("/", (_, res) => {
            res.sendFile("screenshot.png", {
                root: path.join(
                    __dirname,
                    "..",
                    "..",
                    "cypress",
                    "screenshots",
                    "index.cy.ts"
                )
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
        });
    };

    const simulateInteraction = async () => {
        await cypress
            .run({
                spec: path.join("cypress", "e2e", "testfolder", "index.cy.ts"),
                browser: "chrome",
                config: {
                    video: false
                }
            })
            .catch((e) => {
                console.error("Errore nell'interazione con la pagina");
                console.error(e);
            });
    };

    const classify = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("file:///" + process.cwd() + "/index.html");
    };

    launchHttpServer();
    await simulateInteraction();
    await classify();
})();
