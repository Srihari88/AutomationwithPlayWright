import {test,expect} from '@playwright/test'


test('Built In Locators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo=page.getByAltText('company-branding')
    await expect(logo).toBeVisible()
    await page.getByPlaceholder('Username').clear()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByPlaceholder('Password').clear()
    const pageLogin= page.getByRole('button',{type:'submit'})
    expect(pageLogin).toHaveText('Login')
    await page.getByRole('button',{type:'submit'}).click()  
})

test('Verify Forgot password link',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator('Forgot your password').click()
    expect(page.url).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
})