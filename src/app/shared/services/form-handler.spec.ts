import { TestBed } from '@angular/core/testing';

import { FormHandler } from './form-handler';

describe('FormHandler', () => {
  let service: FormHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
