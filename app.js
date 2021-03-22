const puppeteer = require('puppeteer');

let _browser;
let _page;
let _getThemAll;

puppeteer
  .launch()
  .then(browser => (_browser = browser))
  .then(browser => (_page = browser.newPage()))
  .then(page => page.goto('https://www.pedidosya.com.uy/'))
  .then(page => page.type('#address', 'Joaquin Requena 2530'))
  .then(page => page.click('#search'))
  .then(page =>page.waitForTimeout(1000))
  .then(page => page.click('#confirm'))
 //etc etc etc