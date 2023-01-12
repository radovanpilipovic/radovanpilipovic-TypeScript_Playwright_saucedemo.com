import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage";
import ItemPage from "../pages/itemPage";
import LoginPage from "../pages/loginPage";
import CheckoutPage from "../pages/checkoutPage";

test.describe('Adding and removing items', async () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.baseURL()
        await loginPage.logInForm(`${process.env.STANDARD_USER}`, `${process.env.PASSWORD}`)
    })

    test('user add item from home page', async ({ page }) => {
        const homePage = new HomePage(page)

        await homePage.addBackPackItemClick()
        await expect(homePage.shoppingCartBadge).toBeVisible()
    })

    test('user remove item from home page', async ({ page }) => {
        const homePage = new HomePage(page)

        await homePage.addBackPackItemClick()
        await homePage.removeBackPackItemClick()
        await expect(homePage.shoppingCartBadge).not.toBeVisible()
    })

    test('user add item from item page', async ({ page }) => {
        const homePage = new HomePage(page)
        const itemPage = new ItemPage(page)

        await homePage.linkBackPackItemClick()
        await itemPage.addBackPackItemClick()
        await expect(homePage.shoppingCartBadge).toBeVisible()
    })

    test('user remove item from item page', async ({ page }) => {
        const homePage = new HomePage(page)
        const itemPage = new ItemPage(page)

        await homePage.linkBackPackItemClick()
        await itemPage.addBackPackItemClick()
        await itemPage.removeBackPackItemClick()
        await expect(homePage.shoppingCartBadge).not.toBeVisible()
    })

    test('user remove item from checkout page', async ({ page }) => {
        const homePage = new HomePage(page)
        const checkoutPage = new CheckoutPage(page)

        await homePage.addBackPackItemClick()
        await homePage.shoppingCartLink.click()
        await checkoutPage.removeItemBackPackButtonClick()
        await expect(homePage.shoppingCartBadge).not.toBeVisible()
    })

})