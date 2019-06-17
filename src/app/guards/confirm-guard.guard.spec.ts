import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmGuardGuard } from './confirm-guard.guard';

describe('ConfirmGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmGuardGuard]
    });
  });

  it('should ...', inject([ConfirmGuardGuard], (guard: ConfirmGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
