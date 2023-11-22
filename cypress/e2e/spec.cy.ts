describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('check for hello workd', () => {
    cy.visit('/')
    cy.getBySel("hello-world").contains("Hello World 2")
  })
})
