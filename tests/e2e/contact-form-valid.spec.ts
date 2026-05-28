import { test, expect } from '@playwright/test';

test('Contact form submit with valid data', async ({ page }) => {
  await page.goto('/contact');

  await page.fill('input[name="name"]', 'John Tester');
  await page.fill('input[name="email"]', 'tester@example.com');
  await page.fill('textarea[name="message"]', 'Hello, this is a valid submission test.');

  const responsePromise = page.waitForResponse(res =>
    res.url().includes('contact') && res.status() === 200
  );

  await page.click('button[type="submit"]');

  const response = await responsePromise;
  expect(response.status()).toBe(200);

  const successMessage = page.locator('text=Thank');
  await expect(successMessage).toBeVisible();
});