import { test, expect, devices } from '@playwright/test';

// Use mobile device viewport
test.use({ ...devices['iPhone 12'] });

test('Mobile layout functions correctly - 375px', async ({ page }) => {
  await page.goto('/');

  // Hamburger menu should be visible in mobile view
  const menuButton = page.locator('button[aria-label="Menu"], .hamburger');

  await expect(menuButton).toBeVisible();

  await menuButton.click();

  // Navigation list after clicking menu
  await expect(page.locator('nav a')).toBeVisible();
});