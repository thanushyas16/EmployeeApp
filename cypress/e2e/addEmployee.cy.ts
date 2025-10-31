describe('Add Employee Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/'); 
    });
  
    it('should add a new employee successfully', () => {
      cy.get('button').contains('Add Employee').click(); 
  
      // Fill out the employee form
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="position"]').type('Software Engineer');
  
      cy.get('button').contains('Save').click(); 
  
      // Verify the employee is added to the list
      cy.contains('John Doe').should('exist');
      cy.contains('johndoe@example.com').should('exist');
    });
  });