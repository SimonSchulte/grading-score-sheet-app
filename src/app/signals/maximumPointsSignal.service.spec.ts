/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaximumPointsSignalService } from './maximumPointsSignal.service';

describe('Service: MaximumPointsSignal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaximumPointsSignalService]
    });
  });

  it('should ...', inject([MaximumPointsSignalService], (service: MaximumPointsSignalService) => {
    expect(service).toBeTruthy();
  }));
});
