import { test, expect } from '@playwright/test';

const url = `localhost:3000/coins`;

test.describe('Coins', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Shows and visits links', async ({ page, request }) => {
    const coins = await (await request.get(`http://${url}.json`)).json();

    // All are shown
    for (const coin of coins) {
      const coinLink = page.locator(`[data-testid=link-${coin.ticker.toLowerCase()}]`);
      await expect(coinLink).toBeVisible();
    }

    // Links work
    const coinLink = page.locator(`[data-testid=link-${coins[0].ticker.toLowerCase()}]`);
    await Promise.all([
      page.waitForNavigation({ url: `**/${coins[0].slug}` }),
      await coinLink.click(),
    ]);
    expect(page.url()).toContain(coins[0].slug);
  });
});
