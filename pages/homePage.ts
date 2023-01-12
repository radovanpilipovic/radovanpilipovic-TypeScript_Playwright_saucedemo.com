import { Page } from '@playwright/test';
const menuButton = '#react-burger-menu-btn'
const allItemsLink = '#inventory_sidebar_link'
const aboutLink = '#about_sidebar_link'
const logOutLink = '#logout_sidebar_link'
const resetAppStateLink = '#reset_sidebar_link'
const addBackPack = '#add-to-cart-sauce-labs-backpack'
const addBackLight = '#add-to-cart-sauce-labs-bike-light'
const removeBackPack = '#remove-sauce-labs-backpack'
const linkItemBackPack = '.inventory_item:nth-child(1) .inventory_item_name'

export default class HomePage {

    constructor(public page: Page) {
    }

    get shoppingCartBadge() {
        return this.page.locator('.shopping_cart_badge')
    }

    get shoppingCartLink() {
        return this.page.locator('.shopping_cart_link')
    }

    async menuButtonClick() {
        await this.page.locator(menuButton).click()
    }

    async allItemsClick() {
        await this.page.locator(allItemsLink).click()
    }

    async aboutLinkClick() {
        await this.page.locator(aboutLink).click()
    }

    async logOutLinkClick() {
        await this.page.locator(logOutLink).click()
    }

    async resetAppLinkClick() {
        await this.page.locator(resetAppStateLink).click()
    }

    async addBackPackItemClick() {
        await this.page.locator(addBackPack).click()
    }

    async addBackLightItemClick() {
        await this.page.locator(addBackLight).click()
    }

    async removeBackPackItemClick() {
        await this.page.locator(removeBackPack).click()
    }

    async linkBackPackItemClick() {
        await this.page.locator(linkItemBackPack).click()
    }

}