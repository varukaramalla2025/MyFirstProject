import { test, expect } from '@playwright/test';

test('API returns error when required fields are missing', async ({ request }) => {
  // Sending invalid data (missing email and message)
  const response = await request.post('/api/contact', {
    data: {
      name: ''
    }
  });

  expect(response.status()).toBe(400);

  const body = await response.json();

  // API should return an error structure
  expect(body).toHaveProperty('success');
  expect(body).toHaveProperty('error');

  expect(body.success).toBe(false);
  expect(typeof body.error).toBe('string');
});