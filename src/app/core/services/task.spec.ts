import { TestBed } from '@angular/core/testing';

import { TaskServices } from './task';

describe('Task', () => {
  let service: Task;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
