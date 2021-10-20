import { TestBed } from '@angular/core/testing';

import { HijriDateService } from './hijri-date.service';

describe('HijriDateService', () => {
  let service: HijriDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HijriDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
