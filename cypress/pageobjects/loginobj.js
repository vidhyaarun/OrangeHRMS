class login{
    getusername()
    {
        return  cy.get('input[name="username"]')
    }
    getpassword()
    {
        return  cy.get('input[name="password"]')
    }
    getsubmitbtn()
    {
      return  cy.get('button[type="submit"]')
    }
}

export default login