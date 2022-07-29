import * as path from "path";
import loadWebsites from "./websites";
import express from "express";
import cors from "cors";
import cypress from "cypress";
// const TeachableMachine = require("@sashido/teachablemachine-node");

(async () => {
    await cypress.run({
        spec: path.join("cypress", "e2e", "testfolder", "index.cy.ts"),
        browser: "chrome"
    });
    const app = express();
    const port = 3000;
    app.use(cors());

    app.get("/", (req, res) => {
        res.sendFile("screenshot.png", { root: __dirname + "..\\..\\.." });
    });

    app.get("/send", (req, res) => {
        const { p1, p2 } = req.query;
        res.send("OK");
        console.log("1Prodotto: ", p1);
        console.log("2Prodotti: ", p2);
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})();

/* 
(async () => {
    const URL = "https://teachablemachine.withgoogle.com/models/soYZMhgSa/";

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    const model = new TeachableMachine({
        modelUrl: URL
    });
    const imageUrl = `file://${path
        .join(__dirname, "..", "..", "screenshot.png")
        .replace(/\\/g, "/")}`;
    console.log(imageUrl);
    model
        .classify({
            imageUrl
        })
        .then(console.log)
        .catch(console.error);
})(); */

/* 
(async () => {
    console.log(await loadWebsites());
})();
 */
/* const URL =
    "https://shop.akinformatica.it/prodotto/ak-rig-pc-gaming-dragon-talon-ryzen-5-5600x-ddr4-16gb-rgb-rx-6700xt-12g-ssd-1tb-hdd-1tb-win-10-home-3-anni-garanzia-pronta-consegna/";

(async () => {
    let testScript = "";

    testScript += `it('Sneak into Basket', () => {\n`;
    testScript += `\tcy.visit('${URL}')\n`;

    let response;
    try {
        response = await axios.get(URL);
    } catch (error) {
        console.log(error);
        process.exit(-1);
    }
    const $ = load(response?.data);
    $("button").each((_, btn) => {
        if ($(btn).text() === "Aggiungi al carrello") {
            const parents: string[] = [];
            $(btn)
                .parents()
                .each((_, el) => {
                    let entry = el.tagName.toLocaleLowerCase();
                    if ($(el).attr("class")) {
                        entry += `.${$(el).attr("class")?.replace(/ /g, ".")}`;
                        parents.push(entry);
                    }
                });
            const fullPath = parents.join(" > ");
            console.log(fullPath);
            testScript += `\tcy.get('${fullPath}').click({ force: true })\n`;
        }
    });
    testScript += `});\n`;
    await fs.writeFile(
        path.join(
            __dirname,
            "..",
            "..",
            "cypress",
            "e2e",
            "testfolder",
            "test.cy.ts"
        ),
        testScript,
        "utf8"
    );
})();
 */
