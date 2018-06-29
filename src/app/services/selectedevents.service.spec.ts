import { TestBed, inject } from '@angular/core/testing';

import { SelectedeventsService } from './selectedevents.service';

describe('SelectedeventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedeventsService]
    });
  });

  it('should be created', inject([SelectedeventsService], (service: SelectedeventsService) => {
    expect(service).toBeTruthy();
  }));
});
