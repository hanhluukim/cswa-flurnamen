describe('Story 3 Login', () => {
    it('successfully loads', () => {
        cy.visit('/') 
        cy.get('.navigation').contains('Anmeldung').click()
      })
    //check Navigation "Datenerfassung"
    it('nav checken, no Datenerfassung', () => {
        
        cy.get('.navigation').contains('Datenerfassung').should('not.exist')
        cy.wait(10)
    })
    it('failed login and feedbacks', () => {


        let Benutzername = "Hanh"
        let Password="122"

        cy.get('Input[name="username"]').type(Benutzername)
        cy.get('Input[name="password"]').type(Password)
        cy.wait(5)
        cy.get('#btn-login-submit').click({force:true})
        cy.wait(10)
    })
    it('success login', () => {

        cy.get('Input[name="username"]').clear()
        cy.get('Input[name="password"]').clear()

        let Benutzername = "Hanh"
        let Password="hanhhanh"

        cy.get('Input[name="username"]').type(Benutzername)
        cy.get('Input[name="password"]').type(Password)
        cy.get('#btn-login-submit').click()
        
    })
    it('logged, with Datenerfassung',()=>{
        cy.get('.navigation').contains('Datenerfassung').should('be.exist')
        cy.wait(10)
    })
    it('logout, no Datenerfassung',()=>{
        cy.get('.navigation').contains('Abmeldung').click()
        cy.wait(10)
        cy.get('.navigation').contains('Datenerfassung').should('not.exist')
    })
    
})
