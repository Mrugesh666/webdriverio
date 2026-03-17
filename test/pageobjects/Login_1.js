class Loginpage {
    get Username() {
        return $("input[placeholder='Username']");

    }
    get Password() {
        return $("input[placeholder='Password']");
    }
    get LoginButton() {
        return $("button[type='submit']");
    }
async login(username,password){
    await this.Username.setValue(username)
    await this.Password.setValue(password)
    await this.LoginButton.click()
}
}


module.exports = new Loginpage();