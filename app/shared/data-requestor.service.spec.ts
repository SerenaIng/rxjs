import { TestBed } from '@angular/core/testing';

import { DataRequestorService } from './data-requestor.service';

describe('DataRequestorService', () => {
  let service: DataRequestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRequestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
