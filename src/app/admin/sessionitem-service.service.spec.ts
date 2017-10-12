import { TestBed, inject } from '@angular/core/testing';

import { SessionitemServiceService } from './sessionitem-service.service';

describe('SessionitemServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionitemServiceService]
    });
  });

  it('should be created', inject([SessionitemServiceService], (service: SessionitemServiceService) => {
    expect(service).toBeTruthy();
  }));
});
