import { TestBed } from '@angular/core/testing';

import { ButtonsTreeService } from './buttons-tree.service';

describe('ButtonsTreeService', () => {
  let service: ButtonsTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonsTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
