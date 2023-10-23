import { TestBed } from '@angular/core/testing';

import { DatosComunalesService } from './datos-comunales.service';

describe('DatosComunalesService', () => {
  let service: DatosComunalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosComunalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
