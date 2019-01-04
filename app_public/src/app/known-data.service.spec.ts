import { TestBed, inject } from '@angular/core/testing';

import { KnownDataService } from './known-data.service';

describe('KnownDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnownDataService]
    });
  });

  it('should be created', inject([KnownDataService], (service: KnownDataService) => {
    expect(service).toBeTruthy();
  }));
});
