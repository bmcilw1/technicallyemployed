import { test, expect } from '@playwright/test';

const url = `localhost:3000`;

test.describe('Nav', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Highlights activated item', async ({ page }) => {
    const logo = page.locator('[data-testid=logo]');
    const homeLink = page.locator('[data-testid=nav-item-home]');
    const coinsLink = page.locator('[data-testid=nav-item-coins]');

    await expect(logo).toHaveText('Technically Employed');
    await expect(homeLink).toHaveClass(/activated/);
    await expect(coinsLink).not.toHaveClass(/activated/);

    await coinsLink.click();
    await expect(coinsLink).toHaveClass(/activated/);
    await expect(homeLink).not.toHaveClass(/activated/);

    await logo.click();
    await expect(homeLink).toHaveClass(/activated/);
    await expect(coinsLink).not.toHaveClass(/activated/);
  });
});
