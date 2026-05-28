import { test, expect } from '@playwright/test';

test('Application should block XSS injection in form fields', async ({ page }) => {
  await page.goto('/contact');

  const xssPayload = `<script>alert("XSS")</script>`;

  await page.fill('input[name="name"]', xssPayload);
  await page.fill('input[name="email"]', 'xss@test.com');
  await page.fill('textarea[name="message"]', xssPayload);

  await Promise.all([
    page.waitForResponse(res => res.url().includes('/api/contact') && res.status() < 500),
    page.click('button[type="submit"]')
  ]);

  // Ensure the page did NOT run the XSS script
  const content = await page.content();
  expect(content).not.toContain(xssPayload);
});