/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IdentityConfigServiceService } from './identity-config-service.service';

describe('IdentityConfigServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdentityConfigServiceService]
    });
  });

  it('should ...', inject([IdentityConfigServiceService], (service: IdentityConfigServiceService) => {
    expect(service).toBeTruthy();
  }));
});
