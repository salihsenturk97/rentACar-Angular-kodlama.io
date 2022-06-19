import { TestBed } from '@angular/core/testing';

import { PageBackGuard } from './page-back.guard';

describe('PageBackGuard', () => {
  let guard: PageBackGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageBackGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
