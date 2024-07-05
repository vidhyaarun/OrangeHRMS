
import LoginCredentials from "../../fixtures/LoginCredentials.json"
describe('Validating Login Scenario', () => {

  
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

    it('valid crediantials', () => {

        cy.HRMlogin(LoginCredentials.valid.username,LoginCredentials.valid.password);

    })

    it('invalid credentials', () => {

        cy.HRMlogin(LoginCredentials.Invalid.Invalid_username, LoginCredentials.Invalid.Invalid_password)
        cy.get('.oxd-alert-content-text').should('exist')

    })

})
