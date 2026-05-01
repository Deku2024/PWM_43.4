import { TestBed } from '@angular/core/testing';

import { ChargeContentService } from './charge-content.service';

describe('ChargeContentService', () => {
  let service: ChargeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
