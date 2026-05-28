import { test, expect } from '@playwright/test';

test('API should reject SQL injection payloads', async ({ request }) => {
  const response = await request.post('/api/contact', {
    data: {
      name: "'; DROP TABLE users; --",
      email: "hacker@test.com",
      message: "' OR 1=1 --"
    }
  });

  expect(response.status()).toBeGreaterThanOrEqual(400);

  const body = await response.json();
  expect(body.success).toBe(false);
});