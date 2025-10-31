import LoginPage from "./LoginPage";

describe('Login Test', ()=>{
    it("should login with email and password", ()=>{
        const login = new LoginPage();
        login.visit();
        login.fillEmail('thanushyas16@gmail.com');
        login.fillPassword('Uthayan@16');
        login.submit();
    })
})