const loginPage = require("../pageobjects/Login_1")

describe('LoginPage WITH POM', () => {

    it('Login', async () => {
        browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await loginPage.login("Admin", "admin123")
        })
})

