import { expect,test } from "playwright/test";


test(" Handling Input boxes",async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')


// Verifying the input values 
await expect(page.locator('[id="name"]')).toBeVisible()
await expect(page.locator('[id="name"]')).toBeEnabled()
await expect(page.locator('[id="name"]')).toBeEditable()
await page.locator('[id="name"]').isEditable()
await page.locator('[id="name"]').isEnabled()
await page.locator('[id="name"]').clear()
await page.locator('[id="name"]').fill("Srihari")
const name=await page.locator('[id="name"]').inputValue()
expect(name).toBe('Srihari')
console.log(name)

// Verifying the input values 
await expect(page.locator('[id="email"]')).toBeEditable()
await expect(page.locator('[id="email"]')).toBeEnabled()
await expect(page.locator('[id="email"]')).toBeVisible()
await page.locator('[id="email"]').isEditable()
await page.locator('[id="email"]').isEnabled()
await page.locator('[id="email"]').clear()
await page.locator('[id="email"]').fill("srisri.pudu@gmail.com")
const email=await page.locator('[id="email"]').inputValue()
console.log(email)
expect(email).toBe('srisri.pudu@gmail.com')

// Verifying the input values 
await expect(page.locator('[id="phone"]')).toBeEditable()
await expect(page.locator('[id="phone"]')).toBeEnabled()
await expect(page.locator('[id="phone"]')).toBeVisible()
await page.locator('[id="phone"]').isEditable()
await page.locator('[id="phone"]').isEnabled()
await page.locator('[id="phone"]').clear()
await page.locator('[id="phone"]').fill("123456789")
const phone=await page.locator('[id="phone"]').inputValue()
console.log(phone)
expect(phone).toBe('123456789')

// URL Verificatio 

await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')


})