import { mount } from 'cypress/angular';
import { TaskHeaderComponent } from './task-header.component';

describe('TaskHeaderComponent – filtering', () => {

  beforeEach(() => {
    mount(TaskHeaderComponent, {
      componentProperties: {
        filters: ['All', 'In Progress', 'Completed', 'Not Started', 'Overdue'],
        activeFilter: 'All',
      },
    });
  });

  it('renders all status filter buttons', () => {
    cy.get('.filter-btn').should('have.length', 5);
  });

  it('highlights the active filter', () => {
    cy.get('.filter-btn').first().should('have.class', 'active');
  });

  it('emits setFilter with correct value when clicked', () => {
    const spy = cy.spy().as('setFilter');
    mount(TaskHeaderComponent, {
      componentProperties: {
        filters: ['All', 'In Progress'],
        activeFilter: 'All',
        setFilter: { emit: spy } as any,
      },
    });
    cy.get('.filter-btn').eq(1).click();
    cy.get('@setFilter').should('have.been.calledWith', 'In Progress');
  });

  it('opens priority dropdown on funnel click', () => {
    cy.get('.priority-dropdown').should('not.exist');
    cy.get('.priority-filter-wrap ion-button').click();
    cy.get('.priority-dropdown').should('be.visible');
    cy.get('.priority-dropdown__item').should('have.length', 4);
  });

  it('emits setPriority and closes dropdown on option select', () => {
    const spy = cy.spy().as('setPriority');
    mount(TaskHeaderComponent, {
      componentProperties: {
        filters: ['All'],
        activeFilter: 'All',
        setPriority: { emit: spy } as any,
      },
    });
    cy.get('.priority-filter-wrap ion-button').click();
    cy.get('.priority-dropdown__item').contains('High').click();
    cy.get('@setPriority').should('have.been.calledWith', 'High');
    cy.get('.priority-dropdown').should('not.exist');
  });

  it('closes dropdown when clicking outside', () => {
    cy.get('.priority-filter-wrap ion-button').click();
    cy.get('.priority-dropdown').should('exist');
    cy.get('body').click(0, 0);
    cy.get('.priority-dropdown').should('not.exist');
  });

});