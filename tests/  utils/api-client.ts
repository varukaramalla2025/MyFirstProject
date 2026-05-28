import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async sendContactForm(data: { name: string; email: string; message: string }) {
    return await this.request.post('/api/contact', { data });
  }
}
