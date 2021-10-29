import Base from './_base.page'
import {LOGIN} from './components/sauce.elements'


export default class LoginSauce extends Base {

    static acessarSauce(){
        cy.visit(`${Cypress.env('BASE_URL')}`)
    }

    static logar(user = 'standard_user'){
        super.typeValue(LOGIN.INP_USER, user)
        super.typeValue(LOGIN.INP_PASSWORD, `${Cypress.env('password')}`)
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.validarUrl('/inventory.html')
    }
}