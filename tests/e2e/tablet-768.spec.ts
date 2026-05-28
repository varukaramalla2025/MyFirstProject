import { test, expect, devices } from '@playwright/test';

// Use tablet viewport
test.use({ ...devices['iPad Mini'] });

test('Tablet layout renders correctly - 768px', async ({ page }) => {
  await page.goto('/');

  // Navigation bar should be visible
  await expect(page.locator('nav')).toBeVisible();

  // Page should not have horizontal scroll in tablet view
  const hasScrollbar = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });

  expect(hasScrollbar).toBeFalsy(); // No horizontal overflow expected
});