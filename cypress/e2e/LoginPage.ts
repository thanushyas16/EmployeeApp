class LoginPage{

    visit(){
        cy.visit('https://newsapi.org/login')
    }

    fillEmail(value:any){
        const field = cy.get('input[name="Email"]');
        field.clear();
        field.type(value);
        return this;
    }

    fillPassword(value:any){
        const field = cy.get('input[name="Password"]');
        field.clear();
        field.type(value);
        return this;
    }

    submit(){
        const button = cy.get('button');
        button.click();
        cy.contains("Logged in successfully.")
    }
}

export default LoginPage