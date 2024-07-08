
import LoginCredentials from "../../fixtures/LoginCredentials.json"
import recruiitment from "../../pageobjects/recruitmentobj"
//import reports from "../../cypress/pageobjects/pimrepo.js"
import reports from "../../pageobjects/pimrepo"
import pimpage from "../../pageobjects/pimobj"
import data from "../../RandomInputs/PIMData.js"



describe('Validating Recruiment Manu', () => {


    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.HRMlogin(LoginCredentials.valid.username, LoginCredentials.valid.password);

    })

    it('VerifyingCanditates section', () => {
        const recruitment = new recruiitment()
        const report = new reports()
        const PIM = new pimpage()
        //  const Filepath = Cypress.config("fileServerFolder")+("/Users/vidhyasrinivasan/Desktop/image.png")
        recruitment.getrecruinmentmenu().click()
        recruitment.getrecrutheader().should('include.text', 'Recruitment')
        recruitment.getjobtitle().click()
        recruitment.getdropdown().contains("Account Assistant").click()
        recruitment.getstatus().click()
        recruitment.getdropdown().contains("Application Initiated").click()
        report.getsearchbtn().click()
        cy.screenshot()
        recruitment.getinfomsg().should('exist')
        recruitment.getrestbtn().click()
        PIM.getAddbutton().click()
        recruitment.getcandidatebrdcrumb().should('include.text', 'Add Candidate')

        //need to know how to copy the path of file
        //r.getbrowsebtn().selectFile(Filepath)

        //creatng Vaccancy

          const vname = data.vaccancyname
        cy.get('a[href*="#"]').eq(1).click()
        PIM.getAddbutton().click()
        recruitment.getvacancyname().type(vname)
        recruitment.getjobtitle().click()
        recruitment.getdropdown().contains("Account Assistant").click()
        report.getreportname().type('rebecca')
        //cy.wait(2000)
        recruitment.getdropdown().contains('Rebecca Harmony').click()
        PIM.getsavebutton().click()
        cy.get('a[href*="#"]').eq(1).click()

        recruitment.getjobtitle().click()
        recruitment.getdropdown().contains("Account Assistant").click()
        report.getsearchbtn().click()

        //cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div').contains(vname).should('exist')

    })

})