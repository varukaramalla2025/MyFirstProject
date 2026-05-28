export async function waitFor(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export async function retry(action: () => Promise<any>, attempts = 3) {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      return await action();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}