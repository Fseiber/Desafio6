import { TestBed } from '@angular/core/testing';

import { MovieDBService } from './movide-db.service';

describe('MovideDBService', () => {
  let service: MovideDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});