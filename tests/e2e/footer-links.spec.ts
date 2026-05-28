import { test, expect } from '@playwright/test';

test('Footer links work and do not lead to 404 pages', async ({ page }) => {
  await page.goto('/');

  const footerLinks = page.locator('footer a');
  const count = await footerLinks.count();

  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const link = footerLinks.nth(i);
    const href = await link.getAttribute('href');

    // Skip external links (LinkedIn, Twitter, etc.)
    if (href && href.startsWith('http')) continue;

    await Promise.all([
      page.waitForNavigation({ waitUntil: 'load' }),
      link.click()
    ]);

    expect(page.url()).not.toContain('404');

    await page.goBack();
  }
});