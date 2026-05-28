import { test, expect } from '@playwright/test';

test('All CTA buttons route correctly', async ({ page }) => {
  await page.goto('/');

  // Select buttons / links with typical CTA text
  const ctas = page.locator('a, button').filter({ hasText: /learn|contact|explore|get started/i });

  const count = await ctas.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const btn = ctas.nth(i);

    // Ignore external links
    const href = await btn.getAttribute('href');
    if (href && href.startsWith('http')) continue;

    await Promise.all([
      page.waitForNavigation({ waitUntil: 'load' }),
      btn.click()
    ]);

    expect(page.url()).not.toContain('404');

    await page.goBack();
  }
});