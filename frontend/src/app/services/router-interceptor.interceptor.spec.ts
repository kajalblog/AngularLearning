import { TestBed } from '@angular/core/testing';

import { RouterInterceptorInterceptor } from './router-interceptor.interceptor';

describe('RouterInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RouterInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RouterInterceptorInterceptor = TestBed.inject(RouterInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
