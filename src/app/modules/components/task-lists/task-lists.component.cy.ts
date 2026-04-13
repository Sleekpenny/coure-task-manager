import { mount } from 'cypress/angular';
import { FullTask } from '@app/core';
import { TaskListsComponent } from '../task-lists/task-lists.component';

const mockTasks: FullTask[] = [
  {
    id: '1',
    title: 'Build dashboard',
    description: 'Build the main dashboard layout',
    date: new Date('2026-04-20'),
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: '2',
    title: 'Write tests',
    description: 'Write cypress component tests',
    date: new Date('2026-04-25'),
    priority: 'Low',
    status: 'Completed',
  },
];

describe('TaskListsComponent', () => {
  beforeEach(() => {
    mount(TaskListsComponent, {
      componentProperties: { filteredTasks: mockTasks },
    });
  });

  it('renders correct number of rows', () => {
    cy.get('.task-table-row').should('have.length', 2);
  });

  it('displays task title in uppercase', () => {
    cy.get('.task-table-row').first().should('contain.text', 'BUILD DASHBOARD');
  });

  it('hides action buttons by default', () => {
    cy.get('.task-row-actions').should('not.exist');
  });

  it('reveals delete and edit buttons on row click', () => {
    cy.get('.task-table-row').first().click();
    cy.get('.task-row-actions').should('be.visible');
    cy.get('.task-action--delete').should('exist');
    cy.get('.task-action--edit').should('exist');
  });

  it('collapses actions when same row clicked again', () => {
    cy.get('.task-table-row').first().click();
    cy.get('.task-row-actions').should('exist');
    cy.get('.task-table-row').first().click();
    cy.get('.task-row-actions').should('not.exist');
  });

  it('emits deleteTask with correct task', () => {
    const spy = cy.spy().as('deleteTask');
    mount(TaskListsComponent, {
      componentProperties: {
        filteredTasks: mockTasks,
        deleteTask: { emit: spy } as any,
      },
    });
    cy.get('.task-table-row').first().click();
    cy.get('.task-action--delete').click();
    cy.get('@deleteTask').should('have.been.calledWith', mockTasks[0]);
  });

  it('emits editTask with correct task', () => {
    const spy = cy.spy().as('editTask');
    mount(TaskListsComponent, {
      componentProperties: {
        filteredTasks: mockTasks,
        editTask: { emit: spy } as any,
      },
    });
    cy.get('.task-table-row').first().click();
    cy.get('.task-action--edit').click();
    cy.get('@editTask').should('have.been.calledWith', mockTasks[0]);
  });
});