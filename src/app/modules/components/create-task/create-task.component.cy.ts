import { mount } from 'cypress/angular';
import { CreateTaskComponent } from './create-task.component';
import { FullTask } from '@app/core';

describe('CreateTaskComponent', () => {
  it('renders all form fields in create mode', () => {
    mount(CreateTaskComponent);
    cy.get('[data-cy="title-input"]').should('exist');
    cy.get('[data-cy="date-input"]').should('exist');
    cy.get('[data-cy="priority-select"]').should('exist');
    cy.get('[data-cy="status-select"]').should('exist');
    cy.get('[data-cy="desc-input"]').should('exist');
  });

  it('repopulates all fields in edit mode', () => {
    const task: FullTask = {
      id: 1, title: 'Fix layout', date: '2026-04-20',
      priority: 'High', status: 'In Progress',
      desc: 'Fix the sidebar', initials: 'JS',
    };
    mount(CreateTaskComponent, { inputs: { task } });
    cy.get('[data-cy="title-input"]').should('have.value', 'Fix layout');
    cy.get('[data-cy="desc-input"]').should('have.value', 'Fix the sidebar');
  });

  it('does not submit if required fields are empty', () => {
    mount(CreateTaskComponent);
    cy.get('[data-cy="submit-btn"]').click();
    // Form should not dismiss — modal stays open
    cy.get('app-create-task').should('exist');
  });
});