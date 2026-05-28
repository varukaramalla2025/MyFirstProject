import { test, expect } from '@playwright/test';

test('Application should not allow rapid repeated submissions', async ({ request }) => {
  const payload = {
    name: "Rate Tester",
    email: "rate@test.com",
    message: "Testing rate limits"
  };

  let lastStatus = 200;

  for (let i = 0; i < 5; i++) {
    const res = await request.post('/api/contact', { data: payload });
    lastStatus = res.status();
  }

  // Expect server to eventually respond with 429 or >400 error
  expect(lastStatus).toBeGreaterThanOrEqual(400);
});
