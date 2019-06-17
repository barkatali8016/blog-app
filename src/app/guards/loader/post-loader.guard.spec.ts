import { TestBed, async, inject } from '@angular/core/testing';

import { PostLoaderGuard } from './post-loader.guard';

describe('PostLoaderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostLoaderGuard]
    });
  });

  it('should ...', inject([PostLoaderGuard], (guard: PostLoaderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
