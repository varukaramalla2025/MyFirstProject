import { test, expect } from '@playwright/test';

test('Homepage loads with correct title and hero section', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Techdome/i);

  const hero = page.locator('section.hero, .hero-section');
  await expect(hero).toBeVisible();
});