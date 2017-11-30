describe('issues list', function() {
    it('shows all issues', function() {
        cy.resetDB();
        cy.fixture({
            title: 'issue 1'
        });
        cy.fixture({
            title: 'issue 2'
        });

        cy.visit('/issues');

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
    });

    it('filters issues by open status', function() {
        cy.resetDB();
        cy.fixture({title: 'issue 1', status: 'open'});
        cy.fixture({title: 'issue 2', status: 'open'});
        cy.fixture({title: 'issue 3', status: 'closed'});

        cy.visit('/issues');

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
        cy.contains('issue 3').should('exist');

        cy.get('[data-test-open-filter]')
          .click();

        cy.contains('issue 1').should('exist');
        cy.contains('issue 2').should('exist');
        cy.contains('issue 3').should('not.exist');
    });
});
