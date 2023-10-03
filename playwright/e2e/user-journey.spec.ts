import { expect, test } from '@playwright/test'

test.describe('User Journey', () => {
    test('See the sections', async ({ page }) => {
        await page.goto('/')

        await expect(page.locator('div').filter({ hasText: 'CulinaryAlchemyOnline platform that aims to revolutionize the way people discove' }).nth(2))
            .toBeVisible()

        await page.getByRole('link', { name: 'experience' }).click()
        await expect(page).toHaveURL('/#experience')
        await expect(page.locator('div').filter({ hasText: 'Front-end developer ·CulinaryAlchemy2023-07-acutalIn this project, I assumed ful' }).nth(2))
            .toBeVisible()

        await page.getByRole('link', { name: 'skills' }).click()
        await expect(page).toHaveURL('/#skills')
        await expect(page.getByText('react4 ProjectstypeScript4 Projectsastro2 ProjectsPlaywright2 Projectsreact rout'))
            .toBeVisible()
    })
})