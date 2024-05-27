import{test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

})

test('Verify test 1',async({page})=>{

    await expect(page).toHaveTitle('Automation Testing Practice')
})

test('Verify test 2',async({page})=>{

    await expect(page).toHaveTitle('Automation Testing Practice')
})

test('Verify test 3',async({page})=>{

    await expect(page).toHaveTitle('Automation Testing Practice')
})