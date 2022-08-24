import * as puppeteer from 'puppeteer';

const classify = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:///${process.cwd()}/index.html`);
};

export default classify;
