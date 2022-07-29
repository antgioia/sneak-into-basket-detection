import path from "path";
import fs from "fs/promises";

const loadWebsites = async () => {
    const websitesFolder = path.join(__dirname, "..", "..");
    const websitesFiles = await fs.readFile(
        path.join(websitesFolder, "websites.txt"),
        "utf8"
    );
    return websitesFiles.split("\n");
};

export default loadWebsites;
