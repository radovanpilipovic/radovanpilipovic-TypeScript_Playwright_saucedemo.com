import { Page } from "@playwright/test"
const addBackPack = '#add-to-cart-sauce-labs-backpack'
const removeBackPack = '#remove-sauce-labs-backpack'

export default class ItemPage {

    constructor(public page: Page) {
    }

    async addBackPackItemClick() {
        await this.page.locator(addBackPack).click()
    }

    async removeBackPackItemClick() {
        await this.page.locator(removeBackPack).click()
    }

}