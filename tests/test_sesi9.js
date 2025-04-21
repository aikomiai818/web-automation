const { Builder, By, until, Options } = require('selenium-webdriver');
const assert = require('assert');
const firefox = require('selenium-webdriver/firefox');

describe('Test Saucedemo', function (){
    let driver;

    beforeEach(async function () {
        // Menjalankan Firefox di background (headless mode)
        // options = new firefox.Options();
        // options.addArguments('-headless'); 
        // driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        
        driver = await new Builder().forBrowser('firefox').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        //assert = memastikan object sama persis
        assert.strictEqual(title, 'Swag Labs');

        //input login
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()
    });

    it('Login saucedemo dan cek sort Z-A (mode headless)', async function () {
        // Menjalankan Firefox di background (headless mode)
        // options = new firefox.Options();
        // options.addArguments('-headless'); 
        // driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        
        // // driver = await new Builder().forBrowser('firefox').build();

        // await driver.get('https://www.saucedemo.com');
        // const title = await driver.getTitle();

        // //assert = memastikan object sama persis
        // assert.strictEqual(title, 'Swag Labs');

        // //input login
        // let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        // let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        // let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        // await inputUsername.sendKeys('standard_user')
        // await inputPassword.sendKeys('secret_sauce')
        // await buttonLogin.click()

        //cek sort Z-A

        let kliksort = await driver.findElement(By.className('product_sort_container'))
        await kliksort.click()
        let optionZA = await driver.findElement(By.css('option[value="za"]'));
        await optionZA.click();

        //assert: cek text dalam element benar
        //let textAppLogo = await driver.findElement(By.className('app_logo'))
        //let logotext = await textAppLogo.getText()
        //assert.strictEqual(logotext, 'Swag Labs')

        //tunggu element tampil
        //let buttonCart = await driver.wait(
        //    until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
        //    1000
        //);

        //assert element adaa
        //await buttonCart.isDisplayed()

        // await driver.sleep(5000);
        // await driver.quit();
        
    });

    it('Login saucedemo dan cek sort A-Z (mode head)', async function () {
        // Menjalankan Firefox di background (headless mode)
        // options = new firefox.Options();
        // options.addArguments('-headless'); 
        // driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        
        // driver = await new Builder().forBrowser('firefox').build();

        // await driver.get('https://www.saucedemo.com');
        // const title = await driver.getTitle();

        // //assert = memastikan object sama persis
        // assert.strictEqual(title, 'Swag Labs');

        // //input login
        // let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        // let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        // let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        // await inputUsername.sendKeys('standard_user')
        // await inputPassword.sendKeys('secret_sauce')
        // await buttonLogin.click()

        //cek sort Z-A

        let kliksort = await driver.findElement(By.className('product_sort_container'))
        await kliksort.click()
        let optionZA = await driver.findElement(By.css('option[value="az"]'));
        await optionZA.click();

        //assert: cek text dalam element benar
        //let textAppLogo = await driver.findElement(By.className('app_logo'))
        //let logotext = await textAppLogo.getText()
        //assert.strictEqual(logotext, 'Swag Labs')

        //tunggu element tampil
        //let buttonCart = await driver.wait(
        //    until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
        //    1000
        //);

        //assert element adaa
        //await buttonCart.isDisplayed()

        // await driver.sleep(5000);
        // await driver.quit();
        
    });

    it('Login saucedemo dan cek sort Price high to low (mode head)', async function () {
        // Menjalankan Firefox di background (headless mode)
        // options = new firefox.Options();
        // options.addArguments('-headless'); 
        // driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        
        // driver = await new Builder().forBrowser('firefox').build();

        // await driver.get('https://www.saucedemo.com');
        // const title = await driver.getTitle();

        // //assert = memastikan object sama persis
        // assert.strictEqual(title, 'Swag Labs');

        // //input login
        // let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        // let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        // let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        // await inputUsername.sendKeys('standard_user')
        // await inputPassword.sendKeys('secret_sauce')
        // await buttonLogin.click()

        //cek sort Z-A

        let kliksort = await driver.findElement(By.className('product_sort_container'))
        await kliksort.click()
        let optionZA = await driver.findElement(By.css('option[value="hilo"]'));
        await optionZA.click();

        //assert: cek text dalam element benar
        //let textAppLogo = await driver.findElement(By.className('app_logo'))
        //let logotext = await textAppLogo.getText()
        //assert.strictEqual(logotext, 'Swag Labs')

        //tunggu element tampil
        //let buttonCart = await driver.wait(
        //    until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
        //    1000
        //);

        //assert element adaa
        //await buttonCart.isDisplayed()

        // await driver.sleep(5000);
        // await driver.quit();
        
    });

    afterEach(async function () {

        await driver.sleep(5000);
        await driver.quit();
    });
});