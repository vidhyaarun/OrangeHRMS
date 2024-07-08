class recruiitment
{
getrecruinmentmenu()
{
   return cy.get(':nth-child(5) > .oxd-main-menu-item')
}
getrecrutheader()
{
return cy.get('span h6')
}
getjobtitle()
{
    return cy.get('.oxd-select-text--active').eq(0)
}
getdropdown()
{
    return cy.get('div[role="listbox"]')
}
getstatus()
{
    return cy.get('.oxd-select-text--active').eq(3)
}
getinfomsg()
{
    return cy.get('.oxd-toast')
}
getrestbtn()
{
    return cy.get('button[type="reset"]')
}
getcandidatebrdcrumb()
{
    return cy.get('.orangehrm-main-title')
}
getbrowsebtn()
{
    return cy.get('input[type="file"]')
}
getvacancyname()
{
    return cy.get('.oxd-input--active').eq(1)
}
}

export default recruiitment