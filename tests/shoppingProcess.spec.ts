import { test, expect } from "@playwright/test";
import CheckoutPage from "../pages/checkoutPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import customers from '../fixtures/customer.json'
const customer = customers[0]

test('Successful shoping proces', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const checkoutPage = new CheckoutPage(page)

    await loginPage.baseURL()
    await loginPage.logInForm(`${process.env.STANDARD_USER}`, `${process.env.PASSWORD}`)
    await homePage.addBackPackItemClick()
    await homePage.addBackLightItemClick()
    await homePage.shoppingCartLink.click()

    await checkoutPage.checkoutButtonClick()
    await checkoutPage.shoppingForm(customer.firstName, customer.lastName, customer.postalCode);
    await expect(checkoutPage.itemTotal).toHaveText('Item total: $39.98')
    await expect(checkoutPage.tax).toHaveText('Tax: $3.20')
    await expect(checkoutPage.total).toHaveText('Total: $43.18')

    await checkoutPage.finishButtonClick()
    await expect(checkoutPage.title).toHaveText('Checkout: Complete!')

})