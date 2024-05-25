import { test, expect } from '@playwright/test';

test('Locating multiple Elements', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    const pageTitle = await page.title();
    await expect(pageTitle).toBe('STORE');

    // const allElements = await page.$$('a');
    // for (const link of allElements) {
    //     const linkText = await link.textContent();
    //     console.log(linkText);
    // }


    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a")
    const produtNames = await page.$$("//div[@id='tbodyid']//div//h4//a")

    for (const product of produtNames) {
        const mypageElements = await product.textContent()
        console.log(mypageElements)
    }
});
