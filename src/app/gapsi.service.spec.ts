import { TestBed } from '@angular/core/testing';

import { GapsiService } from './gapsi.service';

describe('GapsiService', () => {
  let service: GapsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GapsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
