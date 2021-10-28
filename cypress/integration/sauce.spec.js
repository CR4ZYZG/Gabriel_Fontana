/// <reference types="cypress" />

describe('automações no site Sauce Demo', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('BASE_URL')}`)
    })

    context('produto dentro do carrinho', () => {
        beforeEach(() => {
            const user = 'standard_user'

            cy.logar(user)
            cy.contextProdutoNoCarrinho()
        })

        it('deve realizar o checkout de informações invalidas', () => {
            cy.acessarCarrinho()
            cy.checkoutWrongInfo()
        })

        it('deve realizar o checkout de informações validas', () => {
            cy.acessarCarrinho()
            cy.checkoutCorrectInfo()
        })
    })
})