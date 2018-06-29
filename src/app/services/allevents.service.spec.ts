import { TestBed, inject } from '@angular/core/testing';

import { AlleventsService } from './allevents.service';

describe('AlleventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlleventsService]
    });
  });

  it('should be created', inject([AlleventsService], (service: AlleventsService) => {
    expect(service).toBeTruthy();
  }));
});
