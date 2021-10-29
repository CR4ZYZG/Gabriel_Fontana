/// <reference types="cypress" />
import LoginSauce from "../pages/sauce_login.page"
import CheckoutSauce from "../pages/sauce_checkout.page"
import CartSauce from "../pages/sauce_cart.page"

describe('automações no site Sauce Demo', () => {
    beforeEach(() => {
        LoginSauce.acessarSauce()
    })

    context('produto dentro do carrinho', () => {
        beforeEach(() => {
            
            LoginSauce.logar()
            CartSauce.adicionarNoCarrinho()
        })

        it('deve realizar o checkout de informações invalidas', () => {
            CartSauce.acessarCarrinho()
            cy.checkoutWrongInfo()
        })

        it('deve realizar o checkout de informações validas', () => {
            CartSauce.acessarCarrinho()
            CheckoutSauce.checkout()            
        })

        it('remover itens do carrinho', () => {
            CartSauce.removerCarrinho()
        })
    })
})