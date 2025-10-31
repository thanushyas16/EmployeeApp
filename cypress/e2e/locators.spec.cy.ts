describe('Locators Demo', ()=>{

    it('Type the Email and Password into Login Form', ()=>{
        //cy.visit('https://www.facebook.com/')
        cy.intercept('GET', '/auth/facebook/callback*', {
            statusCode: 200,
            body: {
              token: 'fake-token',
              user: { id: 123, name: 'Test User' }
            }
          }).as('facebookLogin')


        //cy.get('#email').type('john@example.com')
        //cy.get('#pass').type('john123')
        
    })
})