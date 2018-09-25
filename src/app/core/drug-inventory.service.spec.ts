import { TestBed, inject } from '@angular/core/testing';

import { DrugInventoryService } from './drug-inventory.service';

describe('DrugInventoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrugInventoryService]
    });
  });

  it('should be created', inject([DrugInventoryService], (service: DrugInventoryService) => {
    expect(service).toBeTruthy();
  }));
});
