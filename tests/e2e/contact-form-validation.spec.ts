import { test, expect } from '@playwright/test';

test('Contact form shows validation errors when fields are empty or invalid', async ({ page }) => {
  await page.goto('/contact');

  // Submit without filling anything
  await page.click('button[type="submit"]');

  // Required field errors
  await expect(page.locator('text=required')).toBeVisible();

  // Invalid email format
  await page.fill('input[name="email"]', 'invalid-email');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=valid email')).toBeVisible();
});
