class Profile
{
getprofileIcon()
{
   return cy.get('.oxd-userdropdown-tab')
}
getabout()
{
   return cy.get('.--active a[href*="#"]')
}
getAboutheader()
{
    return cy.get('.orangehrm-main-title')
}
getAboutclose()
{
   return cy.get('.oxd-dialog-close-button')
}
}

export default Profile