import { test, expect } from '@playwright/test';

const url = `localhost:3000`;

test.describe('Nav', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Highlights active item', async ({ page }) => {
    const logo = page.locator('[data-testid=logo]');
    await expect(logo).toHaveText('Technically Employed');
    const homeLink = page.locator('[data-testid=nav-item-home]');
    await expect(homeLink).toHaveClass('bg-gray-900');
    const coinsLink = page.locator('[data-testid=nav-item-coins]');
    await expect(coinsLink).not.toHaveClass('bg-gray-900');
    await coinsLink.click();
    await expect(coinsLink).toHaveClass('bg-gray-900');
    await logo.click();
    await expect(homeLink).toHaveClass('bg-gray-900');
  });
});
