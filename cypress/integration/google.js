describe('My First Test', () => {
    it('navegar a google', () => {
      cy.visit('https://www.google.com/?hl=es')
      cy.get('[name=q]').type('Hola Cypress {ENTER}')
      cy.get('.FPdoLc > center > .gNO89b').click()
    })
})