/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WirtschaftsgymnasiumScooringService } from './WirtschaftsgymnasiumScooring.service';

describe('Service: WirtschaftsgymnasiumScooring', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WirtschaftsgymnasiumScooringService]
    });
  });

  it('should ...', inject([WirtschaftsgymnasiumScooringService], (service: WirtschaftsgymnasiumScooringService) => {
    expect(service).toBeTruthy();
  }));
});
