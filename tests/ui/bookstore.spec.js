import { test, expect } from '@playwright/test';
import fs from 'fs';

test('DemoQA Bookstore UI Automation', async ({ page }) => {
  await page.goto('https://demoqa.com/books');

  await page.fill('#userName', 'anfaishal12@gmail.com');
  await page.fill('#password', 'Thalafaizi786#');
  await page.click('#login');

  await expect(page.locator('#userName-value')).toBeVisible();
  await expect(page.locator('button:has-text("Log out")')).toBeVisible();

  await page.fill('#searchBox', 'Learning JavaScript Design Patterns');

  const row = page.locator('.rt-tr-group').filter({
    hasText: 'Learning JavaScript Design Patterns'
  });

  await expect(row).toBeVisible();

  const title = await row.locator('.rt-td').nth(1).innerText();
  const author = await row.locator('.rt-td').nth(2).innerText();
  const publisher = await row.locator('.rt-td').nth(3).innerText();

  fs.writeFileSync('test-data/bookDetails.txt', `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`);

  await page.click('#submit');
});
