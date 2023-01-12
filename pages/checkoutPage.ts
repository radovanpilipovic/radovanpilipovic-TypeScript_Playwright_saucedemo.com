import { Page } from "@playwright/test"  
const checkoutButton = '#checkout'
const firstNameInput = '#first-name'
const lastNameInput = '#last-name'
const postalCodeInput = '#postal-code'
const continueButton = '#continue'
const removeBackPackItemButton = '#remove-sauce-labs-backpack'
const finishButton = '#finish'

export default class CheckoutPage {

    constructor(public page: Page) {
    }

    get errorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    get itemTotal() {
        return this.page.locator('.summary_subtotal_label');
    }

    get tax() {
        return this.page.locator('.summary_tax_label');
    }

    get total() {
        return this.page.locator('.summary_total_label');
    }

    get title() {
        return this.page.locator('.title');
    }

    async checkoutButtonClick() {
        await this.page.locator(checkoutButton).click()
    }

    async firtsNameFill(value: string) {
        await this.page.locator(firstNameInput).fill(value)
    }

    async lastNameFill(value: string) {
        await this.page.locator(lastNameInput).fill(value)
    }

    async postalCodeFill(value: string) {
        await this.page.locator(postalCodeInput).fill(value)
    }

    async continueButtonClick() {
        await this.page.locator(continueButton).click()
    }

    async finishButtonClick() {
        await this.page.locator(finishButton).click()
    }

    async removeItemBackPackButtonClick() {
        await this.page.locator(removeBackPackItemButton).click()
    }

    async shoppingForm(firstName, lastName, postalCode) {
        if (firstName === "" && lastName === "" && postalCode === "") {
            await this.continueButtonClick()
        } else if (firstName === "" && lastName === "") {
            await this.postalCodeFill(postalCode)
            await this.continueButtonClick()
        } else if (firstName === "" && postalCode === "") {
            await this.lastNameFill(lastName)
            await this.continueButtonClick()
        } else if (firstName === "") {
            await this.lastNameFill(lastName)
            await this.postalCodeFill(postalCode)
            await this.continueButtonClick()
        } else if (lastName === "" && postalCode === "") {
            await this.firtsNameFill(firstName)
            await this.continueButtonClick()
        } else if (lastName === "") {
            await this.firtsNameFill(firstName)
            await this.postalCodeFill(postalCode)
            await this.continueButtonClick()
        } else if (postalCode === "") {
            await this.firtsNameFill(firstName)
            await this.lastNameFill(lastName)
            await this.continueButtonClick()
        } else {
            await this.firtsNameFill(firstName)
            await this.lastNameFill(lastName)
            await this.postalCodeFill(postalCode)
            await this.continueButtonClick()
        }
    }

}