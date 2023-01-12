import { Page } from '@playwright/test';
const userNameField = '#user-name'
const passwordField = '#password'
const loginButton = '#login-button'

export default class LoginPage {

    constructor(public page: Page) {
    }

    get errorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    async baseURL() {
        await this.page.goto(`${process.env.BASE_URL}`)
    }

    async userNameFill(value: string) {
        await this.page.locator(userNameField).fill(value);
    }

    async userPasswordFill(value: string) {
        await this.page.locator(passwordField).fill(value);
    }

    async loginButtonClick() {
        await this.page.locator(loginButton).click();
    }

    async logInForm(username, password) {
        if (username === "" && password === "") {
            await this.loginButtonClick()
        } else if (username === "") {
            await this.userPasswordFill(password)
            await this.loginButtonClick()
        } else if (password === "") {
            await this.userNameFill(username)
            await this.loginButtonClick()
        } else {
            await this.userNameFill(username)
            await this.userPasswordFill(password)
            await this.loginButtonClick()
        }
    }

}