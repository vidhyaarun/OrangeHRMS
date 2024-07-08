
import myinfo from "../../pageobjects/Myinfoobj"
import recruiitment from "../../pageobjects/recruitmentobj"
import LoginCredentials from "../../fixtures/LoginCredentials.json"
import pimpage from "../../pageobjects/pimobj"
import data from "../../RandomInputs/PIMData.js"
//import infodata from "../../cypress/fixtures/infodata.json"
import infodata from "/Users/vidhyasrinivasan/HRM/cypress/fixtures/infodata.json"
import pimrepo from "/Users/vidhyasrinivasan/HRM/cypress/pageobjects/pimrepo.js"
import performnace from "/Users/vidhyasrinivasan/HRM/cypress/pageobjects/performanceobj.js"



describe('MyInfo Module', () => {

    //Declaring for each cases to 
    beforeEach(function () {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.HRMlogin(LoginCredentials.valid.username, LoginCredentials.valid.password)
        cy.title().should('eq', 'OrangeHRM')
    })
    it('updating contact details', () => {
        const PIMRepo = new pimrepo()
        const recruitmentpage = new recruiitment()
        const PIM = new pimpage()
        const perform = new performnace()


        perform.getrecruinmentmenu().click()
        PIMRepo.getreportname().type('rebecca')
        recruitmentpage.getdropdown().contains('Rebecca Harmony').click()
        cy.screenshot()
        cy.wait(2000)
        perform.getmytracker().eq(0).click()
        perform.getviewbtn().click()
        perform.getheader().should('exist')
        perform.getaddlog().click()
        perform.getlog().type('firstlog')
        perform.getcomment().type('for testing')
        perform.getsubmitbtn().click(
        perform.getlogtitle().should('exist')
        )


    })

})