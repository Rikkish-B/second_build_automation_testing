describe('checkout functionality', () => {
    it('checkout', () => {
        
        
        cy.visit("https://bewakoooff.netlify.app/html/login.html");


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
        cy.wait(7000);
    cy.contains('h5', 'Combos').click();
    cy.contains("Men's Casual Cargo Pants").click();
    cy.get('.pd-size-s.pd-size-btn').click();
    cy.get('[class="pd-add-to-bag-text"]').click()
    cy.get('a[href="/html/cart"] img.nav-icon').click()
cy.contains('button','ADD ADDRESS').click()
cy.get('[class="form-name"]').type("Rikkish")
cy.get('[class="form-mobile"]').type("8072672994")
cy.get('[class="form-zip"]').type("635109")
cy.get('[class="form-city"]').type("Hosur")
cy.get('[class="form-state"]').type("Tamil Nadu")
cy.get('[class="form-flatno"]').type("3/424, Alasanatham, hosur")
cy.get('[class="form-locality"]').type("Alasanatham")
cy.get('[placeholder="Landmark(optional)"]').type("Hello kids school")
cy.get('[class="place-order"]').click()
    });
});
