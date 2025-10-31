describe('Test HTML Login Form', ()=>{

    it('passes the Login', ()=>{
        cy.visit('https://newsapi.org/login')
        cy.get('input[name="Email"]').type('thanushyas16@gmail.com')
        cy.get('input[name="Password"]').type('Uthayan@16')
        cy.get('button').click()
        cy.contains("Logged in successfully")
    })

})