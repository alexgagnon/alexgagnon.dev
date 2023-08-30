import { test, expect } from '@playwright/test';

['', '/about', '/resume'].map(path => {
  test(`Visual Regressions for ${path}`, async ({ page }) => {
    await page.goto(`http://localhost:4322${path}`);
    await page.locator('.fonts-loaded'); // wait for fonts to load
    expect(await page.screenshot()).toMatchSnapshot({threshold: 0.1});
  });
})
