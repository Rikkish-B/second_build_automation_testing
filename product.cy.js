describe('product functionality', () => {
  it('product', () => {
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
    cy.get('.pd-add-to-wishlist-btn').click();
    cy.get('a[href="/html/wishlist"] img.nav-icon').click();
  });
});
