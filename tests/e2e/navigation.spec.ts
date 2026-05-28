import { test, expect } from '@playwright/test';

test('All navigation links resolve correctly', async ({ page }) => {
  await page.goto('/');

  const links = await page.locator('nav a').all();

  for (const link of links) {
    const href = await link.getAttribute('href');
    if (!href || href.startsWith('http')) continue;

    await Promise.all([
      page.waitForNavigation({ waitUntil: 'load' }),
      link.click()
    ]);

    expect(page.url()).not.toContain('404');
    await page.goBack();
  }
});