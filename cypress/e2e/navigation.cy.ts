describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the Form page', () => {
      // Start from the index page
      cy.visit('/');

      // The index page should contain an h1
      cy.findByRole('heading', {
        name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
      });

      // Find a link containing "Form" text and click it
      cy.findByRole('link', { name: 'Form' }).click();

      // The new url should include "/Form"
      cy.url().should('include', '/form');

      // The new page should contain two "lorem ipsum" paragraphs
      cy.findAllByText('Lorem ipsum dolor sit amet', { exact: false }).should(
        'have.length',
        2
      );
    });
  });
});
