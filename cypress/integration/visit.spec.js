
// Test to visit deployed website 

  describe('Visit website', () => {
    it('Should visit deployed web application', () => {
      cy.visit('https://frosty-curran-19ef5d.netlify.app')

      // successful, check for login 
      cy.contains('type').click()

      // Check for login url
      cy.url().should('include', '/login')
    })
  })