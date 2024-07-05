import LoginCredentials from "../../fixtures/LoginCredentials.json"
import pimpage from "../../pageobjects/pimobj.js"
import Profile from "../../pageobjects/profileicon.js"
//import { faker } from '@faker-js/faker';
//import commands from  "../cypress/support/commands.js"

import data from "../../RandomInputs/PIMData.js"


describe('PIM Module', () => {


    //Declaring for each cases to 
    beforeEach(function () {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.HRMlogin(LoginCredentials.valid.username, LoginCredentials.valid.password)
        cy.title().should('eq', 'OrangeHRM')
    })

    //Profile Icon
    // it('validating about popup from profile dropdown', () => {

    //     //creating object to invoke the objects/locators
    //     const profilepage = new Profile()

    //     //performing operations by calling class from pageobjects folder
    //     profilepage.getprofileIcon().click()
    //     profilepage.getabout().click()
    //     profilepage.getAboutheader().should('exist')
    //     profilepage.getAboutclose().click()
    // })

    //PIM Section
    it('Adding Employee', () => {
        const Pimpage = new pimpage()
        // Navigating to pim module
        // cy.get('.oxd-main-menu-item').contains('PIM').click()
        // cy.get('span h6').should('exist')

        Pimpage.getpimmenu().click()
        Pimpage.getbreadcrump().should('exist')
        Pimpage.getAddbutton().click()
        Pimpage.getAddEmployeeTitle().should('exist')
        Pimpage.getfirstname().type(data.firstname)
        Pimpage.getlastname().type(data.lastname)
        Pimpage.getempid().clear().type(data.empid)
        Pimpage.getcreatetogglebutton().click()
        Pimpage.getusername().type

        //Use { force: true } to bypass error checking when elements are covered.
        Pimpage.getdisableradiobtn().check({ force: true }).should('be.checked')
        Pimpage.getpswrd().type(data.password)
        Pimpage.getcnfrmpswrd().type('axsz12!')

    })
})


