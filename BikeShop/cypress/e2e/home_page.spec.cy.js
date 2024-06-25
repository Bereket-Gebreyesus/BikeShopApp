describe('BikeShop App', () => {
  it('Visits the homepage', () => {
      cy.visit('https://bikeshop-app.netlify.app/');

      // Adjust timeout or use cy.get() if necessary
      cy.contains('Bike Shop', { timeout: 10000 }); // Increase timeout to 10 seconds or adjust as needed
  });
});