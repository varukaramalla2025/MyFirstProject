import { test, expect } from '@playwright/test';

// Simulate 5 users by running the same test 5 times in parallel
test.describe.configure({ mode: 'parallel' });

for (let i = 1; i <= 5; i++) {
  test(`Load Test - User ${i}`, async ({ request }) => {

    const response = await request.post('/api/contact', {
      data: {
        name: `Load Tester ${i}`,
        email: `load${i}@test.com`,
        message: `This is load test message ${i}`
      }
    });

    // Expect API not to break even under load
    expect(response.status()).toBeLessThanOrEqual(429);   // 200-429 is acceptable
  });
}