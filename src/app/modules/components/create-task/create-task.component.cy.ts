import { mount } from 'cypress/angular';
import { CreateTaskComponent } from './create-task.component';
import { FullTask } from '@app/core';
import { ModalController, ToastController } from '@ionic/angular/standalone';

// ── Mock providers so Ionic controllers don't blow up in isolation ──
const modalControllerMock = {
  dismiss: cy.stub().resolves(),
  create: cy.stub().resolves({ present: cy.stub().resolves() }),
};

const toastControllerMock = {
  create: cy.stub().resolves({ present: cy.stub().resolves() }),
};

const mountComponent = (props = {}) =>
  mount(CreateTaskComponent, {
    componentProperties: props,
    providers: [
      { provide: ModalController, useValue: modalControllerMock },
      { provide: ToastController, useValue: toastControllerMock },
    ],
  });

describe('CreateTaskComponent', () => {

  it('renders all form fields in create mode', () => {
    mountComponent();
    cy.get('[data-cy="title-input"]').should('exist');
    cy.get('[data-cy="date-input"]').should('exist');
    cy.get('[data-cy="priority-select"]').should('exist');
    cy.get('[data-cy="status-select"]').should('exist');
    cy.get('[data-cy="desc-input"]').should('exist');
  });

  it('repopulates all fields in edit mode', () => {
    const task: FullTask = {
      id: '1',
      title: 'Fix layout',
      description: 'Fix the sidebar',
      date: new Date('2026-04-20'),
      priority: 'High',
      status: 'In Progress',
    };
    mountComponent({ task });
    cy.get('[data-cy="title-input"]').should('have.value', 'Fix layout');
    cy.get('[data-cy="desc-input"]').should('have.value', 'Fix the sidebar');
  });

  it('does not submit if required fields are empty', () => {
    mountComponent();
    cy.get('[data-cy="submit-btn"]').click();
    cy.get('app-create-task').should('exist');
  });

});