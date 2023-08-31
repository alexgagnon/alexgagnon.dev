import { test, expect } from '@playwright/test';

const pages = {
  "Home": "/",
  "About": "/about",
  "Resume": "/resume",
};

// TODO: /about is flakey because of lazy loaded images
Object.entries(pages).map(([label, path]) => {
  test(`Visual Regressions for ${label} (${path})`, async ({ page }) => {
    await page.goto(`http://localhost:4321${path}`);
    await page.locator('.fonts-loaded'); // wait for fonts to load
    await page.locator('.fancy-button');
    expect(await page.screenshot()).toMatchSnapshot({threshold: 0.1});
  });
})
