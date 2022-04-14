import { test, expect } from '@playwright/test';

const urlPrefix = `localhost:3000/coins`;

test.describe('Coins', () => {
  test('Shows next/previous buttons and they work', async ({ page, request }) => {
    const coins = await (await request.get(`http://${urlPrefix}.json`)).json();

    await page.goto(`${urlPrefix}/${coins[0].slug}`);

    // First page no previous
    const previousLink = page.locator('[data-testid=previous-article]');
    const nextLink = page.locator('[data-testid=next-article]');
    await expect(previousLink).not.toBeVisible();
    await expect(nextLink).toBeVisible();

    // Test next navigation
    await Promise.all([
      page.waitForNavigation({ url: `**/${coins[1].slug}` }),
      await nextLink.click(),
    ]);
    expect(page.url()).toContain(coins[1].slug);

    // Both next/previous shown when not first or last article
    await expect(previousLink).toBeVisible();
    await expect(nextLink).toBeVisible();

    // Test previous navigation
    await Promise.all([
      page.waitForNavigation({ url: `**/${coins[0].slug}` }),
      await previousLink.click(),
    ]);

    // Last page no next
    await page.goto(`${urlPrefix}/${coins[coins.length - 1].slug}`);
    await expect(previousLink).toBeVisible();
    await expect(nextLink).not.toBeVisible();
  });
});
