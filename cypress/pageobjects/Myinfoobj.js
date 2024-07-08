class myinfo {
    getmyinfomenu() {
        return cy.get(':nth-child(6) > .oxd-main-menu-item')
    }
    getcontactdetails(){
        return cy.get(':nth-child(2) > .orangehrm-tabs-item')
    }
    getstreetname(){
        return cy.get('.oxd-input--active')
    }
    getEmergencycontact()
    {
        return cy.get(".orangehrm-tabs-item").eq(2)
    }
getaddbtn()
{
    return cy.get('button[type="button"]').eq(2)
}

}
export default myinfo