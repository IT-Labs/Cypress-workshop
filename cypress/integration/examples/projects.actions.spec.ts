/// <reference types = "cypress"/>
describe('Projects actions test ', () => {
  before(function () {
    cy.filllocalstorage();
  });

  after(function () {
  });

  it('Verify creating project', function () {
    cy.visit(Cypress.config().baseUrl);
    cy.get('#projects').click();
    cy.get('#projects-list').click();
    cy.get('#0name').should('be.visible');
    cy.get('#Add-Project').click();
    cy.get('input[formcontrolname="name"]', {timeout: 30000}).should('be.visible').click().type('Project cypress10', {force: true});
    cy.get('[formcontrolname="clientId"]').find('div > div.mat-select-arrow-wrapper').click().then(() => {
      cy.get('.mat-option-text').contains('API').then((option) => {
        option.click();
      });
    });
    cy.get('input[formcontrolname="startDate"]').click().type('2010-02-01', {force: true});
    cy.get('input[formcontrolname="endDate"]').click().type('2010-05-12', {force: true});
    cy.get('#save-btn').should('be.visible').click();

    // validation
    cy.get('#projects-list-back').should('be.visible');
    cy.get('#project-name').contains('Project cypress10');
    cy.get('#client-name').contains('API');
    cy.get('span[id*="startDate"]').contains('2010-02-01');
    cy.get('span[id*="endDate-active"]').contains('2010-05-12');    
  });

});