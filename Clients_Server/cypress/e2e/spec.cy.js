describe('first Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.wait(1000)
    cy.get('.table-container').children().should('have.length', 2)  
  })

  it("click", () => {
    cy.contains("New").click()
    cy.url().should('include', '/new' )
  })

  it("create", () => {
    cy.get('#name')
    .type('faker')
    .should('have.value', 'faker')

    cy.get('#email')
    .type('fake@gamil.com')
    .should('have.value', 'fake@gamil.com')

    cy.get('#dob')
    .type('1996-12-17')
    .should('have.value', '1996-12-17')

    cy.contains('Submit').click()
    cy.wait(500)
    cy.contains('Manager').click()
    cy.wait(1000)
    cy.get('.table-container').children().should('have.length', 3)  
  })
  
})