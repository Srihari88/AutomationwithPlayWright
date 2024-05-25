import {test,expect} from '@playwright/test'

test('Locating web elements',async({page})=>{

    await page.goto('https://demoblaze.com/')
    const pageTitle=await page.title()

    await expect(page).toHaveTitle('STORE')
    await page.click('[id="login2"]')
    await page.fill('[id="loginusername"]','srihari')
    await page.fill('[id="loginpassword"]','Naidu')
    await page.click('[onclick="logIn()"]')


})