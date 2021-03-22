describe('Story 4: Searchpage', () => {
    it('successfully loads', () => {
      cy.visit('/') 
    })
    it('Go to Datensuche',()=>{
        cy.wait(2)
        cy.get('.navigation').contains('Datensuche').click()
        cy.url().should('include', '/suche')
      })
      
    it('Some suggestions from api for user (API loading background)', ()=>{
        
        
        let query = "Meh"
        
        cy.get('input[name="input-query"]').type(query, {delay:100})
        cy.get('p[class="p-suggest"]', { timeout: 1000000000}).should('be.visible')
        cy.get('input[name="input-query"]').clear()
    })
    it('Results for entire query',()=>{
        let query= "Berka"
        cy.get('input[name="input-query"]').type(query)
        cy.get('#id-btn-search').click()
        cy.get('#id-number-results', { timeout: 100000000000}).should('be.visible')
    })
    it('check table results correct',()=>{
        cy.get('#id-number-results').then(($span) => {
            
            const nr = parseFloat($span.text())

            cy.get('#table-results').find('tr').should('have.length', nr+1)
          
            
          })
    })
    it('open details modal',()=>{
        let rows = cy.get('#table-results')//.
        let fr = rows.find('tr').eq(1)
        let c = fr.find('td').eq(4)

        cy.get('#id-number-results').then(($span) => {
            
            const nr = parseFloat($span.text())

            //cy.get('#table-results').find('tr').should('have.length', nr+1)
            if(nr){
                cy.get('#table-results').find('tr').eq(nr).find('td').eq(nr).find('button').click()
                //get('button[class="btn btn-success"]').click()
                //c.get('button[class="btn btn-success"]').click()
                cy.wait(10000)
                //cy.get('#btn-details-close').click()
            }
            
          })

    })
    it('close details modal',()=>{
        cy.get('#btn-details-close').click()
    })
})