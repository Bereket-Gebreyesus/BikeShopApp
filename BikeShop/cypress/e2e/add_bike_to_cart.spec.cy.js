describe('Add Bike to Cart', () => {
    it('Adds a bike to the cart', () => {
        cy.visit('https://bikeshop-app.netlify.app/'); // Replace with your actual website URL

        // Example: Click on a specific bike's 'Add to Cart' button
        cy.contains('Add to Cart').first().click();

        // Optionally, verify a success message or check if the cart count updates
        cy.contains('Added').should('exist');
    });
});