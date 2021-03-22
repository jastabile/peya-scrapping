const puppeteer = require('puppeteer');


async function main() {
  // Your async code here
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });
    
    const page = await browser.newPage();
    // await page.setRequestInterception(true);
    
    await page.goto('https://www.pedidosya.com.uy/');
    await page.type('#address', 'Joaquin Requena 2530');
    await page.click('#search');
    await page.waitForTimeout(1000)
    await page.click('#confirm');
    await page.waitForTimeout(1000)
    const getThemAll = await page.$$('a.arrivalName')
    // console.log(getThemAll)
    console.log(getThemAll.length)
    getThemAll.forEach(async link => {
      // console.log(link)
      // await page.evaluate(() => link.click())
    })
    
    // await page.goBack()
  } catch (err) {
    console.log('Error:', err)
  }
}

main();


// Cambio para commitear