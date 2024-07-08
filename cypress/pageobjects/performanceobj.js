
class performnace
{
getrecruinmentmenu()
{
   return cy.get(':nth-child(7) > .oxd-main-menu-item')
}
getmytracker()
{
    return cy.get('a[href*="#"]')
}
getviewbtn()
{
    return cy.get('button[name="view"]')
}
getheader()
{
    return cy.get('div h5')
}
getaddlog()
{
    return cy.get('.oxd-button--medium')
}
getlog()
{
    return cy.get('.oxd-input--active').eq(1)
}
getcomment()
{
    return cy.get('.oxd-textarea')
}
getsubmitbtn()
{
    return cy.get('button[type="submit"]')
}
getlogtitle()
{
return cy.get('.orangehrm-employee-tracker-log-title-text')
}
}
export default performnace