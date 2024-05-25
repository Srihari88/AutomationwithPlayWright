import {test,expect} from '@playwright/test'

test("Verify dropdown ",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('[id="country"]').selectOption({label:'India'})          // By Using visible test
    const selectedValue = await page.locator('[id="country"]').inputValue();
    await page.waitForTimeout(5000)
    console.log(`Selected value: ${selectedValue}`);

    await page.waitForTimeout(5000)

    await page.locator('[id="country"]').selectOption('China')          // By Using visible test
    const selectedValue1 = await page.locator('[id="country"]').inputValue();
    await page.waitForTimeout(5000)
    console.log(`Selected value: ${selectedValue1}`);


    await page.waitForTimeout(5000)

    await page.locator('[id="country"]').selectOption({value:'uk'})          // By Using Value
    const selectedValue2 = await page.locator('[id="country"]').inputValue();
    console.log(`Selected value: ${selectedValue2}`);


    // Verifying the total number of assertions 

    const options= await page.locator('#country option')
    console.log(options)
    expect(options).toHaveCount(10)

    // Print list of dropdown values 

    const listOptions=await page.$$('#country option')
    console.log(listOptions.length)

})