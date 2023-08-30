import { test, expect } from '@playwright/test';

// TODO: /about is flakey because of lazy loaded images
['', /*'/about', */'/resume'].map(path => {
  test(`Visual Regressions for ${path}`, async ({ page }) => {
    await page.goto(`http://localhost:4322${path}`);
    await page.locator('.fonts-loaded'); // wait for fonts to load
    await page.locator('.fancy-button');
    expect(await page.screenshot()).toMatchSnapshot({threshold: 0.1});
  });
})
