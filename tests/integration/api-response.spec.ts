import { test, expect } from '@playwright/test';

test('API returns success response when form data is valid', async ({ request }) => {
  const response = await request.post('/api/contact', {
    data: {
      name: 'Test User',
      email: 'testuser@example.com',
      message: 'This is a message for integration testing.'
    }
  });

  // Check API status code
  expect(response.status()).toBe(200);

  const body = await response.json();

  // Validate API response structure
  expect(body).toHaveProperty('success');
  expect(body).toHaveProperty('message');

  expect(body.success).toBe(true);
});