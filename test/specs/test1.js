
describe('demo test',function() {

    it('My First test',async()=> {
        browser.url('https://www.google.com/')
        await $("#APjFqb").setValue('webriverio');
        await $("div[class='lJ9FBc'] input[name='btnK']").click();
    })

})