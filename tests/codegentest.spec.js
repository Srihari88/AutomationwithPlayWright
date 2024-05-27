import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#name').click();
  await page.locator('#name').fill('SrihariNaidu');
  await page.locator('#email').click();
  await page.locator('#email').fill('srisri.pudu@gmail.com');
  await page.locator('#email').press('Tab');
  await page.locator('#phone').fill('7878787878');
  await page.getByLabel('Address:').click();
  await page.getByLabel('Address:').fill('Vizag, Welcome');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('Monday').check();
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Colors:').selectOption('green');
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '25' }).click();
});