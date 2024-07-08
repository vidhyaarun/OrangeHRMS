class reports
{
getreportheader()
{
   return cy.get('.oxd-topbar-body-nav-tab-item')
}
getreportname()
{
   return cy.get('input[placeholder="Type for hints..."]')
}
getemployeejobdetailsoption()
{
   return  cy.get('div[role = "listbox"]').contains("Employee Job Details")
}
getsearchbtn()
{
   return cy.get(".orangehrm-left-space")
}
getcheckbox()
{
   return cy.get('.bi-check')
}
getdeleteselected()
{
   return cy.get('.orangehrm-horizontal-margin')
}
}
export default reports