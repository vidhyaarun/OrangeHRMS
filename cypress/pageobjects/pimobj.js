
class pimpage {
  getpimmenu() {
    return cy.get('.oxd-main-menu-item>span').contains('PIM')
  }
  getbreadcrump() {
    return cy.get('span h6')
  }
  getAddbutton() {
    return cy.get('.oxd-button--secondary>i')
  }
  getAddEmployeeTitle() {
    return cy.get('div h6').contains('Add Employee')
  }
  getfirstname() {
    return cy.get('.orangehrm-firstname')
  }
  getlastname() {
    return cy.get('.orangehrm-lastname')
  }
  getempid() {
    return cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
  }
  getcreatetogglebutton() {
    return cy.get('.oxd-switch-input')
  }
  getusername() {
    return cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
  }
  getdisableradiobtn() {
    return cy.get('input[value="2"]')
  }
  getpswrd() {
    return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
  }
  getcnfrmpswrd() {
    return cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
  }
  getsavebutton() {
    return cy.get('button[type="submit"]')
  }
  getsuccessmsg()
  {
    return cy.get('.oxd-toast')
  }
  getuntoverify()
  {
    return cy.get('.orangehrm-edit-employee-name')
  }
  getcalender()
  {
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
  }
  getsavebtn()
  {
   return  cy.get('.orangehrm-left-space')
  }

}

export default pimpage