import { test, expect } from '@playwright/test';

const url = `localhost:3000`;

test.describe('Nav', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Visits links and highlights activated item', async ({ page, isMobile }) => {
    const logo = page.locator('[data-testid=logo]');
    const mobileMenuButton = page.locator('[data-testid=mobile-menu-button]');
    const homeLink = page.locator(`[data-testid=nav-item-home${isMobile ? '-mobile' : ''}]`);
    const coinsLink = page.locator(`[data-testid=nav-item-coins${isMobile ? '-mobile' : ''}]`);

    await expect(logo).toHaveText('Technically Employed');

    if (isMobile) await mobileMenuButton.click();
    await expect(homeLink).toHaveClass(/activated/);
    await expect(coinsLink).not.toHaveClass(/activated/);

    await coinsLink.click();

    if (isMobile) await mobileMenuButton.click();
    await expect(coinsLink).toHaveClass(/activated/);
    await expect(homeLink).not.toHaveClass(/activated/);
    expect(page.url()).toContain('coins');

    await logo.click();

    if (isMobile) await mobileMenuButton.click();
    await expect(homeLink).toHaveClass(/activated/);
    await expect(coinsLink).not.toHaveClass(/activated/);
    expect(page.url()).not.toContain('coins');
  });
});
