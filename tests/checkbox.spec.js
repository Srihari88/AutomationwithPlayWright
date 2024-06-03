import { test, expect } from '@playwright/test'

test("Handling Checkbox in Playwright", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    expect(page.locator('[id="sunday"]')).toBeVisible()
    await page.locator('[id="sunday"]').check()
    await expect(page.locator('[id="sunday"]')).toBeChecked()
    await page.locator('[id="sunday"]').uncheck()
    const checkBoxStatus = await page.locator('[id="sunday"]').isChecked()
    expect(checkBoxStatus).toBe(false)

})

test("Handling Mutile Check boxes", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let Days = page.locator('[class="form-check form-check-inline"] [type="checkbox"]')
    const count = await Days.count();
    console.log(count)

    for (let i = 0; i < count; i++) {
        const checkboxv = Days.nth(i)
        console.log(checkboxv)
        const value = await checkboxv.getAttribute('value');

        if (value.includes('tuesday')) {
            await checkboxv.check();
        } else {
            await checkboxv.uncheck();
        }
    }
})