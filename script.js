const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();

    try {
        await driver.get('https://platned.com/');

        let title = await driver.getTitle();
        console.log('Page title is:', title);

        // await driver.wait(until.elementLocated(By.css('h1')), 10000); test.....

        // let elementText = await driver.findElement(By.css('h1')).getText();
        // console.log('Element text is:', elementText);
    } finally {
        await driver.quit(); //TS
        console.log("new rules") //test 

        //new comment line//jdjf
    }
})();
