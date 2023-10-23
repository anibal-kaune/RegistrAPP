import { TestBed } from '@angular/core/testing';

import { ConsultaComunaService } from './consulta-comuna.service';

describe('ConsultaComunaService', () => {
  let service: ConsultaComunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaComunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
