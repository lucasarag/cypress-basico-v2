// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// To open the cypress = npx cypress open
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach('Verifica o título da aplicação', function() {
        cy.visit('./src/index.html')
        cy.title().should('equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it('Preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Aragão') 
        cy.get('#email').type('lucas@teste.com')
        cy.get('#open-text-area').type('Primeira tentativa de script Primeira tentativa de script Primeira tentativa de script Primeira tentativa de script Primeira tentativa de script Primeira tentativa de script Primeira tentativa de script Primeira tentativa de script',{delay: 0})
        cy.get('#white-background > form > button').click().should('be.visible', 'class="succes"')
    })
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Aragão') 
        cy.get('#email').type('lucastestecom')
        cy.get('#open-text-area').type('Exercício extra 2',{delay: 20})
        cy.get('#white-background > form > button').click().should('be.visible', 'class="error"')
    })
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Aragão') 
        cy.get('#email').type('lucas@teste.com')
        cy.get('#phone-checkbox').click()
        cy.get('#phone').type('e')
        cy.get('input#phone').type('efada').should(($input) => {
            const val = $input.val()
            expect(val).to.match()
        })
        cy.get('#open-text-area').type(' Exercício extra 3 e 4',{delay: 20})
        cy.get('[type="submit"]').click().should('be.visible', 'class="error"')
    })
  })
  