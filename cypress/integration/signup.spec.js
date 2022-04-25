describe('My First Test', () => {
  it('Visits signup page', () => {
    cy.visit('localhost:3000/signup')

    cy.get('[data-test="name-input"]').click({ force: true }).type('john')
    cy.get('[data-test="company-input"]').click({ force: true }).type('Company')
    cy.get('[data-test="phone-input"]').click({ force: true }).type('07899999999')
    cy.get('[data-test="email-input"]').click({ force: true }).type('test@test.com')
    cy.get('[data-test="postcode-input"]').click({ force: true }).type('9000')
    cy.get('[data-test="pay-later-button"]').click({ force: true })
    cy.get('[data-test="test-submit-button"]').click({ force: true })
    cy.get('[data-test="list-name-john"]').should('contain', 'john')
    cy.get('[data-test="search-input"]').click({ force: true }).type('abc')
    cy.get('[data-test="empty-list"]').should('contain', 'No company found !')
    cy.get('[data-test="search-input"]').click({ force: true }).clear()
    cy.get('[data-test="search-input"]').click({ force: true }).type('joh')
    cy.get('[data-test="list-name-john"]').should('contain', 'john')
  })
})