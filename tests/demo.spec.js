import { expect,test } from "playwright/test";

test("Verify Page",async({page})=>{

    await page.goto("https://www.facebook.com/")
    await page.locator('[data-testid="royal_email"]').isEditable()
    await page.locator('[data-testid="royal_email"]').isEnabled()
    await page.locator('[data-testid="royal_email"]').clear()
    await page.locator('[data-testid="royal_email"]').fill('srisri.pudu@gmail.com')
    await page.locator('[data-testid="royal_pass"]').fill('password')
    await page.locator('[data-testid="royal_login_button"]').click()
    await expect(page).toHaveTitle('Log in to Facebook');
    console.log(`Running test: ${test.info().title}`);

})


test('test', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');
  await page.getByRole('link', { name: 'API' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.getByRole('heading', { name: 'Hot Fried Chicken' }).click();
  await page.locator('div').filter({ hasText: /^Hot Fried Chicken$/ }).first().click();
    console.log(`Running test: ${test.info().title}`);
});