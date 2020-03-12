describe('Test App', () => {

    it('launches', () => {
        cy.visit('/');
    });
    it('shows banner', () => {
        cy.visit('/');
        cy.get('[data-cy=banner]').should('be.visible');
    });
});