export const TestData = {
  validUser: {
    name: "John Doe",
    email: "john@test.com",
    message: "Hello from automated test!"
  },

  invalidUser: {
    name: "",
    email: "invalid-email",
    message: ""
  },

  xssPayload: {
    name: `<script>alert('XSS')</script>`,
    email: "xss@test.com",
    message: `<img src=x onerror=alert('XSS')>`
  }
};