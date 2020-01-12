const puppeteer = require('puppeteer');

async function websraper(url, targetQuery, extractorFn) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en' });
  await page.goto(url);
  const result = await page.$$eval(targetQuery, extractorFn);
  browser.close();
  return result;
}

module.exports = websraper;
