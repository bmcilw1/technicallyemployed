import { test, expect } from '@playwright/test';

const url = `localhost:3000/coins`;

test.describe('Coins', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Shows and visits links', async ({ page }) => {
    const btcLink = page.locator(`[data-testid=link-btc]`);
    await Promise.all([page.waitForNavigation({ url: '**/bitcoin' }), await btcLink.click()]);
    expect(page.url()).toContain('bitcoin');
  });
});
