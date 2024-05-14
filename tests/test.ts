import * as fs from 'node:fs'
import { expect, test } from '@playwright/test'

test('index page is reachable and has expected title', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Blog', level: 1 })).toBeVisible()
})

test('about page is reachable and has expected title', async ({ page }) => {
  await page.goto('/about')
  await expect(page.getByRole('heading', { name: 'About', level: 1 })).toBeVisible()
})

test('posts are reachable and have expected titles', async ({ page }) => {
  // Load manifest of posts. Must build first or no manifest.
  const data = fs.readFileSync('./static/manifest.json')
  const manifest = JSON.parse(data.toString())

  // Check that first heading of each post matches the title
  for await (const entry of manifest) {
    await page.goto(entry.slug)
    await expect(
      page.getByRole('heading', { name: manifest.title, level: 1 }).first()
    ).toBeVisible()
  }
})
