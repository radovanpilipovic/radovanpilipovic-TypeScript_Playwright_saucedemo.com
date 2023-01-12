import { test, expect } from '@playwright/test';
import customer from '../fixtures/customer.json'
import CheckoutPage from '../pages/checkoutPage';
import HomePage from '../pages/homePage';
import LoginPage from "../pages/loginPage";

test.describe("Test suite - 'CHECKOUT: YOUR INFORMATION' page", async () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        const homePage = new HomePage(page)
        const checkoutPage = new CheckoutPage(page)

        await loginPage.baseURL()
        await loginPage.logInForm(`${process.env.STANDARD_USER}`, `${process.env.PASSWORD}`)
        await homePage.shoppingCartLink.click()
        await checkoutPage.checkoutButtonClick()
    })

    customer.forEach((data) => {

        test(`Filling customer informations ${data.info}`, async ({ page }) => {
            const checkoutPage = new CheckoutPage(page)

            await checkoutPage.shoppingForm(data.firstName, data.lastName, data.postalCode);
            await expect(page).toHaveURL(data.url)
            if (data.hasError) {
                await expect(checkoutPage.errorMessage).toBeVisible()
            }
        })
    })

})