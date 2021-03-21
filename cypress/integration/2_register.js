describe('Story 2 Registrierung', () => {
    it('successfully loads', () => {
        cy.visit('/') 
        cy.get('.navigation').contains('Registrierung').click()
      })
    //not register email invalied
    it('faild register, email invalid', () => {
        

        let Benutzername = "Hanh"
        let Email ="Test"

        cy.get('Input[name="username"]').type(Benutzername)
        cy.get('Input[name="email"]').type(Email)
        cy.wait(5)
        cy.get('#btn-submit').click({force:true})


        cy.get('Input[name="email"]').type(Email)
        cy.wait(10)
    })
    it('faild register, password invalid', () => {

        //cy.get('.navigation').contains('Registrierung').click()

        let Benutzername = "Hanh"
        let Email ="Test@gmail.com"
        let Password="122"

        cy.get('Input[name="username"]').type(Benutzername)
        cy.get('Input[name="email"]').type(Email)
        cy.get('Input[name="password"]').type(Password)
        cy.wait(5)
        cy.get('#btn-submit').click({force:true})
        cy.wait(10)
    })
    it('faild register, user already exits', () => {

        //cy.get('.navigation').contains('Registrierung').click()

        let Benutzername = "Hanh"
        let Email ="Hanh@gmail.com"
        let Password="11111111111"

        cy.get('Input[name="username"]').clear()
        cy.get('Input[name="email"]').clear()
        cy.get('Input[name="password"]').clear()

        cy.get('Input[name="username"]').type(Benutzername)
        cy.get('Input[name="email"]').type(Email)
        cy.get('Input[name="password"]').type(Password)
        cy.wait(5)
        cy.get('#btn-submit').click({force:true})
        cy.wait(10)
    })
    it(' successfully register', () => {

        //cy.get('.navigation').contains('Registrierung').click()

        let Benutzername = "OtherHanh"
        let Email ="otherHanh@gmail.com"
        let Password="11111111111"

        cy.get('Input[name="username"]').clear()
        cy.get('Input[name="email"]').clear()
        cy.get('Input[name="password"]').clear()

        cy.get('Input[name="username"]').type(Benutzername)
        cy.get('Input[name="email"]').type(Email)
        cy.get('Input[name="password"]').type(Password)
        cy.wait(20)
        cy.get('#btn-submit').click()
        cy.wait(10)
    })
    
})
