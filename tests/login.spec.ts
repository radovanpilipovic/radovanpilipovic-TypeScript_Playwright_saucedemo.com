import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import user from '../fixtures/users.json'

test.describe('Login test suite', async () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.baseURL()
    })

    user.forEach((data) => {

        test(`Login with ${data.credential}: ${data.username}`, async ({ page }) => {
            const loginPage = new LoginPage(page)

            await loginPage.logInForm(data.username, data.password)
            await expect(page).toHaveURL(data.url);
            if (data.hasError) {
                await expect(loginPage.errorMessage).toBeVisible();
            }
        })
    })

})