const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
//const firefox = require('selenium-webdriver/firefox');

describe('Test Saucedemo', function (){
    let driver;

    it('visit saucedemo dan cek page title', async function () {
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

        await driver.sleep(5000);
        await driver.quit();
        
    });
});