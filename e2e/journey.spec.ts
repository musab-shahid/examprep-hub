import { test, expect } from '@playwright/test';

/**
 * Critical path journeys — URL sync (Phase A) without requiring AI keys.
 */
test.describe('Critical journeys', () => {
  test('Learn stage loads via /learn', async ({ page }) => {
    await page.goto('/learn');
    await expect(page.locator('body')).toBeVisible();
    await expect(
      page.getByText(/learn|subject|section|topic|FPSC|HAT|study/i).first(),
    ).toBeVisible({ timeout: 15_000 });
  });

  test('Topic deep link renders study chrome', async ({ page }) => {
    await page.goto('/topic/meteo-origin-evolution');
    await expect(page.locator('body')).toBeVisible();
    // Title from metadata or full content after load
    await expect(
      page.getByText(/Origin|Atmosphere|Evolution|Definition|Key Facts|Stud/i).first(),
    ).toBeVisible({ timeout: 20_000 });
  });

  test('Practice and Progress stages load', async ({ page }) => {
    await page.goto('/practice');
    await expect(
      page.getByText(/practice|quick|mock|quiz|warm|challenge|review/i).first(),
    ).toBeVisible({ timeout: 15_000 });

    await page.goto('/progress');
    await expect(
      page.getByText(/progress|mastery|accuracy|streak|readiness|studied/i).first(),
    ).toBeVisible({ timeout: 15_000 });
  });

  test('FPSC landing and Review stage load', async ({ page }) => {
    await page.goto('/fpsc');
    await expect(
      page.getByText(/FPSC|subject|meteorology|physics|math/i).first(),
    ).toBeVisible({ timeout: 15_000 });

    await page.goto('/review');
    await expect(
      page.getByText(/review|due|spaced|revision|nothing due|catch up/i).first(),
    ).toBeVisible({ timeout: 15_000 });
  });

  test('Flashcards and Search load', async ({ page }) => {
    await page.goto('/flashcards');
    await expect(page.locator('body')).toBeVisible();
    await expect(
      page.getByText(/flashcard|card|fact|formula|idiom|empty|subject|study/i).first(),
    ).toBeVisible({ timeout: 15_000 });

    await page.goto('/search');
    await expect(
      page.getByRole('searchbox')
        .or(page.getByPlaceholder(/search/i))
        .or(page.getByText(/search/i))
        .first(),
    ).toBeVisible({ timeout: 15_000 });
  });
});
