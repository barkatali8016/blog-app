import { TestBed, async, inject } from '@angular/core/testing';

import { ManagePostLoaderGuard } from './manage-post-loader.guard';

describe('ManagePostLoaderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagePostLoaderGuard]
    });
  });

  it('should ...', inject([ManagePostLoaderGuard], (guard: ManagePostLoaderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
