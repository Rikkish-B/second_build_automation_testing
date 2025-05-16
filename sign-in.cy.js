describe('signin', () => {
    it('valid data', () => {
        cy.visit("https://bewakoooff.netlify.app/html/login")

        cy.get('[class="signup-name"]').type("rikkish")
        cy.get('[class="signup-username"]').type("Riki")
        cy.get('[class="signup-password"]').type("Rikidhanu1404@")
        cy.get('[class="signup-email"]').type("rikidhanu933@gmail.com")
        cy.get('[class="signup-number"]').type("8072672994")
        cy.get('[class="signup-btn"]').click({ force: true })
        
cy.wait(4000);
         cy.get('[class="login-username"]').type("Riki")
        cy.get('[class="login-password"]').type("Rikidhanu1404@")
        cy.get('[class="login-password"]').click({ force: true })

       
    });
});
