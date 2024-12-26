Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Marcio')
    cy.get('#lastName').type('Bilby')
    cy.get('#email').type('marcio.bilby@exemplo.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})