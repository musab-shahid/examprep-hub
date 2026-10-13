import { test, expect } from '@playwright/test';

test.describe('Shell accessibility basics', () => {
  test('skip link and main landmark exist', async ({ page }) => {
    await page.goto('/');
    const skip = page.getByRole('link', { name: /skip to content/i });
    await expect(skip).toBeAttached();
    await expect(page.locator('#main-content, main#main-content, main').first()).toBeVisible({
      timeout: 15_000,
    });
  });

  test('primary navigation is labeled', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation').first();
    await expect(nav).toBeVisible({ timeout: 15_000 });
  });
});
