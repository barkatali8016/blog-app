import { TestBed, async, inject } from '@angular/core/testing';

import { ViewpostLoaderGuard } from './viewpost-loader.guard';

describe('ViewpostLoaderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewpostLoaderGuard]
    });
  });

  it('should ...', inject([ViewpostLoaderGuard], (guard: ViewpostLoaderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
