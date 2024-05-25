import { test, expect } from '@playwright/test';

const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test('Verify that the login page loads correctly with the OrangeHRM logo', async ({ page }) => {
    const logo = page.getByAltText('company-branding')
    await expect(logo).toBeVisible();
  });

  test('Verify that the "Login" title is displayed prominently on the page', async ({ page }) => {
    const loginTitle = page.locator('h5.orangehrm-login-title');
    await expect(loginTitle).toHaveText('Login');
  });

  test('Verify that the username and password fields are present and can accept input', async ({ page }) => {
    const usernameField = page.locator('input[name="username"]');
    const passwordField = page.locator('input[name="password"]');
    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await usernameField.fill('Admin');
    await passwordField.fill('admin123');
    await expect(usernameField).toHaveValue('Admin');
    await expect(passwordField).toHaveValue('admin123');
  });

  test('Verify that the "Login" button is present and clickable', async ({ page }) => {
    const loginButton = page.locator('button[type="submit"]');
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
  });

  test('Verify that the "Forgot your password?" link is present and clickable', async ({ page }) => {
    const forgotPasswordLink = page.locator('text=Forgot your password?');
    await expect(forgotPasswordLink).toBeVisible();
    await expect(forgotPasswordLink).toBeEnabled();
  });

  test('Verify that the user can successfully log in using the provided demo credentials', async ({ page }) => {
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/dashboard');
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('Verify that the social media links redirect to the correct pages when clicked', async ({ page }) => {
    const socialLinks = [
      { selector: 'a[href*="linkedin"]', expectedUrl: 'https://www.linkedin.com/company/orangehrm/mycompany/' },
      { selector: 'a[href*="facebook"]', expectedUrl: 'https://www.facebook.com/OrangeHRM/' },
      { selector: 'a[href*="twitter"]', expectedUrl: 'https://twitter.com/orangehrm?lang=en' },
      { selector: 'a[href*="youtube"]', expectedUrl: 'https://www.youtube.com/c/OrangeHRMInc' }
    ];

    for (const link of socialLinks) {
      const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click(link.selector)
      ]);
      await expect(newPage).toHaveURL(link.expectedUrl);
      await newPage.close();
    }
  });

  test('Verify that the copyright information is displayed correctly at the bottom of the page', async ({ page }) => {
    const copyrightText = page.locator('.orangehrm-copyright-wrapper');
    await expect(copyrightText).toContainText('© 2005 - 2024 OrangeHRM, Inc. All rights reserved.');
  });

  test('Verify that the login page displays an error message when incorrect username and password are entered', async ({ page }) => {
    await page.fill('input[name="username"]', 'wrongUser');
    await page.fill('input[name="password"]', 'wrongPass');
    await page.click('button[type="submit"]');
    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
  });

  test('Verify that the login page displays an error message when the username field is left blank', async ({ page }) => {
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
  });

  test('Verify that the login page displays an error message when the password field is left blank', async ({ page }) => {
    await page.fill('input[name="username"]', 'Admin');
    await page.click('button[type="submit"]');
    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
  });

  test('Verify that the login page displays an error message when both username and password fields are left blank', async ({ page }) => {
    await page.click('button[type="submit"]');
    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
  });

  test('Verify that the login page does not allow SQL injection or any malicious script in the username and password fields', async ({ page }) => {
    await page.fill('input[name="username"]', 'admin" OR 1=1 --');
    await page.fill('input[name="password"]', 'password" OR 1=1 --');
    await page.click('button[type="submit"]');
    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
  });

  test('Verify that the "Login" button is disabled when both username and password fields are empty', async ({ page }) => {
    const loginButton = page.locator('button[type="submit"]');
    await expect(loginButton).toBeDisabled();
  });

  test('Verify that the login page handles network failures gracefully and displays an appropriate error message', async ({ page }) => {
    // Simulate network failure
    await page.route('**/auth/validate', route => route.abort());
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
  });
});