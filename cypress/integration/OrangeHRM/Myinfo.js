
import myinfo from "../../pageobjects/Myinfoobj"
import recruiitment from "../../pageobjects/recruitmentobj"
import LoginCredentials from "../../fixtures/LoginCredentials.json"
import pimpage from "../../pageobjects/pimobj"
import data from "../../RandomInputs/PIMData.js"
//import infodata from "../../cypress/fixtures/infodata.json"
import infodata from "/Users/vidhyasrinivasan/HRM/cypress/fixtures/infodata.json"




describe('MyInfo Module', () => {

    //Declaring for each cases to 
    beforeEach(function () {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.HRMlogin(LoginCredentials.valid.username, LoginCredentials.valid.password)
        cy.title().should('eq', 'OrangeHRM')
    })
    it('updating contact details', () => {
        const infodetails = new myinfo()
        const recruitmentpage = new recruiitment()
        const PIM = new pimpage()
        cy.wait(2000)
        infodetails.getmyinfomenu().click()
        cy.wait(4000)

        //contact details 
        infodetails.getcontactdetails().click()
        infodetails.getstreetname().eq(1).clear().type(infodata.Street)
        PIM.getsavebutton().click()

        //Emergency contact details
        infodetails.getEmergencycontact().click()
    infodetails.getaddbtn().click()
        recruitmentpage.getvacancyname().type(data.firstname)
        infodetails.getstreetname().eq(1).type(infodata.Relationship)
        infodetails.getstreetname().eq(2).type(infodata.MoboileNo)
        //infodetails.getstreetname().eq(2).type(data.Mno)
        PIM.getsavebutton().click()

       // cy.get('p a').contains('OrangeHRM, Inc').invoke('removeAttr', 'target').click()


        //cy.get('.oxd-layout-footer > :nth-child(2) > a').invoke('removeAttr', 'target').click();

//        cy.get('a[target="_blank"]').invoke('removeAttr', 'target').click();






    })

})