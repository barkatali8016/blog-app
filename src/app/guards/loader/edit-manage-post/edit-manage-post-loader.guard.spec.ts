import { TestBed, async, inject } from '@angular/core/testing';

import { EditManagePostLoaderGuard } from './edit-manage-post-loader.guard';

describe('EditManagePostLoaderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditManagePostLoaderGuard]
    });
  });

  it('should ...', inject([EditManagePostLoaderGuard], (guard: EditManagePostLoaderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
