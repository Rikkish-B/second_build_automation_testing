describe('homepage', () => {
    it('submodules', () => {
       
        
        cy.visit("https://bewakoooff.netlify.app/html/")

      cy.get('#navEnd span').contains("ACCESSORIES").click()
        
    });
});
