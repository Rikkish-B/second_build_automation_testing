describe('search functionality', () => {
    it('search', () => {
        
cy.visit("https://bewakoooff.netlify.app/html/")
cy.get('[type="text"]').type('jogger')
cy.get('[id="serachicon"]').click()
cy.get('[id="product-path-title"]').should("be.visible")

    });
});
