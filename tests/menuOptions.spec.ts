import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

test.describe('Menu options suite', async () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.baseURL()
        await loginPage.logInForm(`${process.env.STANDARD_USER}`, `${process.env.PASSWORD}`)
    })

    test('ALL ITEMS link', async ({ page }) => {
        const homePage = new HomePage(page)

        await homePage.shoppingCartLink.click()
        await homePage.menuButtonClick()
        await homePage.allItemsClick()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test('ABOUT Link', async ({ page }) => {
        const homePage = new HomePage(page)

        await homePage.menuButtonClick()
        await homePage.aboutLinkClick()
        await expect(page).toHaveURL('https://saucelabs.com/')
    })

    test('LOGOUT Link', async ({ page }) => {
        const homePage = new HomePage(page)
        const loginPage = new LoginPage(page)

        await homePage.menuButtonClick()
        await homePage.logOutLinkClick()
        await expect(page).toHaveURL(`${process.env.BASE_URL}`)
    })

    test('RESET APP STATE Link', async ({ page }) => {
        const homePage = new HomePage(page)

        await homePage.addBackPackItemClick()
        await homePage.menuButtonClick()
        await homePage.resetAppLinkClick()
        await expect(homePage.shoppingCartBadge).not.toBeVisible()
    })

})