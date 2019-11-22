import { TestBed } from '@angular/core/testing';

import { StagesManagementService } from './stages-management.service';

describe('StagesManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagesManagementService = TestBed.get(StagesManagementService);
    expect(service).toBeTruthy();
  });
});
