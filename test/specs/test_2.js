const loginPage = require("../pageobjects/Login_1")

describe('LoginPage WITH POM', () => {

    it('Login', async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await loginPage.login("Martin", "admin123")
        })
})

