import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'svelte-page-tab' })
  ).toBeVisible()

  const { origin } = new URL(page.url())

  await expect(page.getByText(`Current location : ${origin}/`)).toBeVisible()

  await page.getByRole('link', { name: 'Page 1' }).click()

  await expect(
    page.getByText(`Current location : ${origin}/page1`)
  ).toBeVisible()

  await page.getByRole('link', { name: 'Page 2' }).click()

  await expect(
    page.getByText(`Current location : ${origin}/page2`)
  ).toBeVisible()

  await page.getByRole('link', { name: 'Page 3' }).click()

  await expect(
    page.getByText(`Current location : ${origin}/page3`)
  ).toBeVisible()

  await page.getByRole('link', { name: 'Root' }).click()

  await expect(page.getByText(`Current location : ${origin}/`)).toBeVisible()
})
