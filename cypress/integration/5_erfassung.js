describe('Story 5: Login-Erfassung', () => {
    it('successfully loads', () => {
      cy.visit('/') 
    })
    
    it('No Datenerfassung',()=>{
      cy.wait(2)
      cy.get('.navigation').contains('Datenerfassung').should('not.exist')
    })
    
    it('Success Login', ()=>{
        
        cy.get('.navigation').contains('Anmeldung').click()
        let Benutzername = "Hanh"
        let Password="hanhhanh"

        cy.get('Input[name="username"]').type(Benutzername)
        cy.get('Input[name="password"]').type(Password)
        cy.get('#btn-login-submit').click()
        
    })
    
    it('Datenerfassung appears in NAV', ()=>{
        cy.get('.navigation').contains('Datenerfassung').should('be.exist')
        cy.wait(10)
        cy.get('.navigation').contains('Datenerfassung').click()
        cy.url().should('include', '/erfassung')
       
    })
    
    it('Datenerfassung Page', ()=>{
        cy.get('#card-db').contains('Grundlagen für die Datenbank')
        cy.get('#datenerfassung-area').find('form')

    })
    it('Input and Feedbacks', ()=>{
        let flurname = "igrend ein Flurname "
        let gemarkungName = "es befindet sich hier"
        let information = "hier ist information"
        let mundart = "hier ist mundart"
        cy.get('input[name="input-flurname"]').type(flurname)

        cy.get('button[name="btn-submit"]').click().wait(1000)

        cy.get('input[name="input-gemarkung"]').type(gemarkungName)
        cy.get('input[name="input-beleg"]').type(information)
        cy.get('input[name="input-mundart"]').type(mundart)
        cy.get('input[name="input-lage"]').type(information)
        cy.get('#input-extra').type("zusätzliche Information")
        
        cy.get('button[name="btn-submit"]').click()
        cy.wait(100)
        cy.get('button[name="btn-continue-add"]').click()

    })

    it('Interrupt and Hompage back', ()=>{

        let flurname = "igrend ein Flurname "
        cy.get('input[name="input-flurname"]').type(flurname)
        cy.get('#link-back').click()
    })
    it('Interrupt and Logout', ()=>{

        cy.get('.navigation').contains('Datenerfassung').click()
        cy.url().should('include', '/erfassung')

        let flurname = "man kann vor hier LOGOUT "
        let gemarkungName = "nach dem Loggout keine Datenerfassung möglich"

        cy.get('input[name="input-flurname"]').type(flurname)
        cy.get('input[name="input-gemarkung"]').type(gemarkungName)

        cy.get('.navigation').contains('Abmeldung').click()
        cy.wait(10)
        cy.get('.navigation').contains('Datenerfassung').should('not.exist')
    })
  })
