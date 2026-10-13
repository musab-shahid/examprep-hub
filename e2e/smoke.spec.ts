import { test, expect } from '@playwright/test';

/**
 * Critical-path smoke — no AI keys required.
 * Assumes production build is served by playwright webServer (vite preview).
 */
test.describe('App smoke', () => {
  test('home loads and primary nav is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
    // App shell should render something interactive
    await expect(page.getByRole('navigation').or(page.locator('nav')).first()).toBeVisible({
      timeout: 15_000,
    });
  });

  test('can open Practice stage from shell', async ({ page }) => {
    await page.goto('/');
    // Try common labels used in the bottom/side nav
    const practice = page.getByRole('link', { name: /practice/i })
      .or(page.getByRole('button', { name: /practice/i }))
      .or(page.getByText(/^Practice$/i))
      .first();
    if (await practice.count()) {
      await practice.click();
      await expect(page.getByText(/practice|quiz|mock|warm/i).first()).toBeVisible({
        timeout: 10_000,
      });
    } else {
      // Path-based navigation (Phase A URL sync)
      await page.goto('/practice');
      await expect(page.locator('body')).toBeVisible();
    }
  });

  test('settings route responds', async ({ page }) => {
    await page.goto('/settings');
    await expect(page.locator('body')).toBeVisible();
    await expect(
      page.getByText(/settings|data|export|install|version/i).first(),
    ).toBeVisible({ timeout: 10_000 });
  });
});
