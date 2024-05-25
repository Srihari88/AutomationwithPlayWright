const {test,expect}=require('@playwright/test')

test('Home Page',async({page})=>{

    await page.goto('https://www.facebook.com/')
    const pageTitle=await page.title()
    console.log(pageTitle)
    await expect(page).toHaveTitle('Facebook – log in or sign up')
    await expect(page).toHaveURL('https://www.facebook.com/')
    await page.close();

})