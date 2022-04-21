import { test, expect } from '@playwright/test';

const url = `localhost:3000`;

test.describe('NewsletterSignUp', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Does not allow empty submissions', async ({ page }) => {
    const button = page.locator('data-testid=submit-newsletter-signup');
    await expect(button).toBeDisabled();
  });

  test('Does not allow bad emails', async ({ page }) => {
    const button = page.locator('data-testid=submit-newsletter-signup');
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('bademail');
    await expect(button).toBeDisabled();
  });

  test('Allows valid emails', async ({ page }) => {
    const submitBtn = page.locator('data-testid=submit-newsletter-signup');
    const emailInput = page.locator('input[name="email"]');
    const successBtn = page.locator('data-testid=acknowledge-newsletter-signup-success');

    await emailInput.fill('goodtest@test.com');
    await expect(submitBtn).not.toBeDisabled();

    await Promise.all([successBtn.isVisible(), submitBtn.click()]);

    await Promise.all([page.locator('data-testid=logo').isVisible(), successBtn.click()]);
  });
});
