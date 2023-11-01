import { TestBed } from '@angular/core/testing';

import { ServiceFavService } from './service-fav.service';

describe('ServiceFavService', () => {
  let service: ServiceFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
