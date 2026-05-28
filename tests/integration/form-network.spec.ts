import { test, expect } from '@playwright/test';

test('Contact form triggers correct API request with proper payload', async ({ page }) => {
  await page.goto('/contact');

  await page.fill('input[name="name"]', 'Integration Tester');
  await page.fill('input[name="email"]', 'integration@test.com');
  await page.fill('textarea[name="message"]', 'Hello integration test');

  const [request] = await Promise.all([
    page.waitForRequest(req => req.url().includes('contact') && req.method() === 'POST'),
    page.click('button[type="submit"]')
  ]);

  const payload = JSON.parse(request.postData() || '{}');

  expect(payload).toHaveProperty('name');
  expect(payload).toHaveProperty('email');
  expect(payload).toHaveProperty('message');

  expect(payload.name.length).toBeGreaterThan(0);
});