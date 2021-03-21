describe('Story 1: Homepage and others', () => {
    it('successfully loads', () => {
      cy.visit('/') 
    })
    
    it('navigation check',()=>{
      cy.wait(2)
      cy.get('.navigation').contains('Datenerfassung').should('not.exist')
    })
    
    it('project reading', ()=>{
        cy.get('[id=btn-read-project]').click()
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
  })
