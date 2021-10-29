/// <reference types="cypress" />
import LoginSauce from "../pages/sauce_login.page"

describe('automações no site Sauce Demo', () => {
    beforeEach(() => {
        LoginSauce.acessarSauce()
    })
    it.only('teste com outros users', () => {
        LoginSauce.logar(pbmUser)
    })

    context('produto dentro do carrinho', () => {
        beforeEach(() => {
            const user = 'standard_user'

            LoginSauce.logar(user)
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