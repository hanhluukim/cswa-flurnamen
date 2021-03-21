describe('Story 1: Homepage and others', () => {
    it('successfully loads', () => {
      cy.visit('/') 
    })
    
    it('navigation check',()=>{
      cy.wait(2)
      cy.get('.navigation').contains('Datenerfassung').should('not.exist')
    })
    
    it('project reading', ()=>{
        //cy.get('[id=btn-read-project]').click()

        cy.get('#link-to-project').click()

        cy.url().should('include', '/projekt') // => true
        cy.wait(1)
    })
    
    it('contact reading', ()=>{
        cy.contains('Kontakt').click()
        cy.wait(3)
    })
    
    it('partner reading', ()=>{
      cy.contains('Partner').click() //open
      cy.wait(4)
      cy.contains('Partner').click() //closed
    })
    it('to datensuche from home', ()=>{
      cy.get('.navigation').contains('Home').click()
      cy.get('#link-to-search').click()
      cy.url().should('include', '/suche') // => true
    })
    it('to flurnamen', ()=>{
      cy.get('.navigation').contains('Flurnamen').click()
     
      cy.url().should('include', '/flurnamen') // => true
    })

  })
