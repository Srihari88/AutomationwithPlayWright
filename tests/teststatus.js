const { test, expect } = require('@playwright/test');

test.beforeAll(() => {
  console.log('Starting test suite...');
});

test.afterEach(async ({}, testInfo) => {
  const status = testInfo.status === 'passed' ? 'PASSED' : 'FAILED';
  console.log(`Test: ${testInfo.title} - Status: ${status}`);
});

test.afterAll(() => {
  console.log('Test suite finished.');
});

test('This is my test case', async ({ page }) => {
  console.log(`Running test: ${test.info().title}`);

  // Your test code here
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

test('Another test case', async ({ page }) => {
  console.log(`Running test: ${test.info().title}`);

  // Your test code here
  await page.goto('https://example.com');
  const heading = await page.textContent('h1');
  expect(heading).toBe('Example Domain');
});
