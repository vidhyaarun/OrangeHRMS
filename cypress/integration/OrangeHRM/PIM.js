import LoginCredentials from "../../fixtures/LoginCredentials.json"
import pimpage from "../../pageobjects/pimobj.js"
import Profile from "../../pageobjects/profileicon.js"
import Reportname from "../../fixtures/Reportname.json"
import data from "../../RandomInputs/PIMData.js"
import reports from "../../pageobjects/pimrepo.js"
import PIMdata from "/Users/vidhyasrinivasan/HRM/cypress/fixtures/PIMdata.json"


describe('PIM Module', () => {

    //Declaring for each cases to 
    beforeEach(function () {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.HRMlogin(LoginCredentials.valid.username, LoginCredentials.valid.password)
        cy.title().should('eq', 'OrangeHRM')
    })

    //Profile Icon
    it('validating about popup from profile dropdown', () => {

        //creating object to invoke the objects/locators
        const profilepage = new Profile()

        //performing operations by calling class from pageobjects folder
        profilepage.getprofileIcon().click()
        profilepage.getabout().click()
        profilepage.getAboutheader().should('exist')
        profilepage.getAboutclose().click()
    })

    //PIM Section
    it('Adding Employee', () => {
        const Pimpage = new pimpage()
        //storing randomly generated firstname values in username 
        const un = data.firstname
        const ln = data.lastname

        //storing randomly generated password into confirm password
        const confirmpassword = data.password + 2
        // storing randomly generated emp id into id
        const ID = data.empid

        // Navigating to pim module

        Pimpage.getpimmenu().click()
        Pimpage.getbreadcrump().should('exist')

        // Adding Employee details 
        Pimpage.getAddbutton().click()
        Pimpage.getAddEmployeeTitle().should('exist')
        Pimpage.getfirstname().type(data.firstname)
        Pimpage.getlastname().type(data.lastname)
        Pimpage.getempid().clear().type(data.empid)

        Pimpage.getcreatetogglebutton().click()
        // Calling stored firstname
        Pimpage.getusername().type(un)

        //Use { force: true } to bypass error checking when elements are covered.
        Pimpage.getdisableradiobtn().check({ force: true }).should('be.checked')

        Pimpage.getpswrd().type(data.password + 2)
        //Calling Stored Randomly generated password to confirm password
        Pimpage.getcnfrmpswrd().type(confirmpassword)
        Pimpage.getsavebutton().click()
        //cy.screenshot()
        Pimpage.getsuccessmsg().should('be.visible')
        Pimpage.getuntoverify().should('have.text', un + " " + ln)
        Pimpage.getcalender().click().type(PIMdata.date)
        Pimpage.getsavebtn().eq(1).click()
        cy.screenshot()
        
        const repo = new reports()
        repo.getreportheader().eq(3).click()
        repo.getreportname().type(Reportname.reportname)
        //repo.getemployeejobdetailsoption().click()

        repo.getemployeejobdetailsoption().click()
        repo.getsearchbtn().click()
        repo.getcheckbox().eq(1).click()//.should('be.checked')
        repo.getdeleteselected().should('be.visible')
        repo.getcheckbox().eq(1).click()//.should('not.be.checked')


    })


})


