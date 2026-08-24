import AxeBuilder from '@axe-core/playwright'
import { test, expect } from '@playwright/test'

test.describe('Login page accessibility', () => {
    test('should have a single h1 heading', async ({ page }) => {
        await page.goto('http://localhost:5174')
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
        expect(accessibilityScanResults.violations).toEqual([])
    })

})