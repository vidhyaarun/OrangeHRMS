import LoginCredentials from "../fixtures/LoginCredentials.json"
import login from "../pageobjects/loginobj"


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('HRMlogin', () => {

//     cy.get('input[name="username"]').type(LoginCredentials.username)
//     cy.get('input[name="password"]').type(LoginCredentials.password)
//     cy.get('button[type="submit"]').click()
//     cy.url().should('include', '/opensource')
// })


Cypress.Commands.add('HRMlogin', (username,password) => {
   const loginpage =  new login()
    loginpage.getusername().type(username)
    loginpage.getpassword().type(password)
    loginpage.getsubmitbtn().click()
    cy.url().should('include', '/opensource')
})



// Cypress.Commands.add('HRMlogin', () => {

//     cy.get('input[name="username"]').type(Login.username)

//     //cy.get('.oxd-input.oxd-input--active').eq(1).should('exist').type('Admin')
//     cy.get('input[name="password"]').type(Login.password)
//     cy.get('button[type="submit"]').click()

// })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })