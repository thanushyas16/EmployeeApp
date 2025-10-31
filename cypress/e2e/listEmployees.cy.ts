describe('List Employees Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/'); 
    });
  
    it('should display the list of employees', () => {
      // Verify the table/list is visible
      cy.get('table').should('be.visible');
  
      // Check if at least one employee is listed
      cy.get('table tbody tr').should('have.length.greaterThan', 0);
    });
  });