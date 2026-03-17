class Loginpage {
    get Username() {
        // OrangeHRM uses stable name attributes for these fields
        return $("input[name='username']");

    }
    get Password() {
        return $("input[name='password']");
    }
    get LoginButton() {
        return $("button[type='submit']");
    }
async login(username,password){
    await this.Username.waitForDisplayed({ timeout: 15000 })
    await this.Username.setValue(username)
    await this.Password.waitForDisplayed({ timeout: 15000 })
    await this.Password.setValue(password)
    await this.LoginButton.waitForClickable({ timeout: 15000 })
    await this.LoginButton.click()
}
}


module.exports = new Loginpage();