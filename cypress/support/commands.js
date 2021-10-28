import Faker from 'faker';

Cypress.Commands.overwrite('type',(originalFn,subject,str,options)=>{
    if(str !==''){
        return originalFn(subject, str, options)
    }
        return subject
    })

Cypress.Commands.add('logar', (user = 'standard_user') => {
    const INP_USER  = '[data-test=username]'
    const INP_PASSWORD = '[data-test=password]'
    const BTN_LOGIN = '[data-test=login-button]'

    cy.get(INP_USER).type(user)
    cy.get(INP_PASSWORD).type(`${Cypress.env('password')}`)
    cy.get(BTN_LOGIN).click()
    cy.url().should('include', '/inventory.html')
})

Cypress.Commands.add('contextProdutoNoCarrinho', () => {
    const NUM_CART = '.shopping_cart_badge'
    const LIST_PRODUCTS = '.inventory_list'
    const BTN_ADDTOCART = '[data-test=add-to-cart-sauce-labs-backpack]'

    cy.get(LIST_PRODUCTS).first().should('contain', 'Sauce Labs Backpack')
    cy.get(BTN_ADDTOCART).click()
    cy.get(NUM_CART).should('contain', 1)
})

Cypress.Commands.add('acessarCarrinho', () => {
    const BTN_CART = '.shopping_cart_link'

    cy.get(BTN_CART).click()
    cy.url().should('include', '/cart.html')
})

Cypress.Commands.add('checkoutWrongInfo', () => {
    const BTN_CHECKOUT = '[data-test=checkout]'
    const INP_FIRSTNAME = '[data-test=firstName]'
    const INP_LASTNAME = '[data-test=lastName]' 
    //isso não vai receber nenhum dado para dar erro
    const INP_ZIPCODE = '[data-test=postalCode]'
    const BTN_CHECKOUT_CONTINUE = '[data-test=continue]'

    cy.get(BTN_CHECKOUT).click()
    cy.url().should('include', 'checkout-step-one.html')
    cy.get(INP_FIRSTNAME).type('')
    cy.get(INP_LASTNAME).type('')
    cy.get(INP_ZIPCODE).type(Faker.company.companyName())
    cy.get(BTN_CHECKOUT_CONTINUE).click()
    cy.url().should('include', 'checkout-step-one.html')
})

Cypress.Commands.add('checkoutCorrectInfo', () => {
    const BTN_CHECKOUT = '[data-test=checkout]'
    const INP_FIRSTNAME = '[data-test=firstName]'
    const INP_LASTNAME = '[data-test=lastName]'
    const INP_ZIPCODE = '[data-test=postalCode]'
    const BTN_CHECKOUT_CONTINUE = '[data-test=continue]'
    const BTN_CHECKOUT_FINISH = '[data-test=finish]'

    cy.get(BTN_CHECKOUT).click()
    cy.url().should('include', 'checkout-step-one.html')
    cy.get(INP_FIRSTNAME).type(Faker.name.firstName())
    cy.get(INP_LASTNAME).type(Faker.name.lastName())
    cy.get(INP_ZIPCODE).type(Faker.address.zipCode())
    cy.get(BTN_CHECKOUT_CONTINUE).click()
    cy.url().should('include', 'checkout-step-two.html')
    cy.get(BTN_CHECKOUT_FINISH).click()
    cy.url().should('include', 'checkout-complete.html')
})



