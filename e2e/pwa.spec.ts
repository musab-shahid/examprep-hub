import { test, expect } from '@playwright/test';

test.describe('PWA shell', () => {
  test('manifest is served and has required fields', async ({ request }) => {
    const res = await request.get('/manifest.json');
    expect(res.ok()).toBeTruthy();
    const json = await res.json();
    expect(json.name).toBeTruthy();
    expect(json.short_name).toBeTruthy();
    expect(json.start_url).toBeTruthy();
    expect(json.display).toBeTruthy();
    expect(Array.isArray(json.icons)).toBeTruthy();
    expect(json.icons.length).toBeGreaterThan(0);
  });

  test('service worker script is reachable', async ({ request }) => {
    const res = await request.get('/sw.js');
    expect(res.ok()).toBeTruthy();
    const text = await res.text();
    expect(text.length).toBeGreaterThan(50);
  });

  test('icons referenced by manifest respond', async ({ request }) => {
    const res = await request.get('/manifest.json');
    const json = await res.json();
    for (const icon of json.icons ?? []) {
      const src = icon.src as string;
      const path = src.startsWith('http') ? src : src;
      const ir = await request.get(path);
      expect(ir.ok(), `icon ${src}`).toBeTruthy();
    }
  });
});
