import {TestBed, inject} from '@angular/core/testing';

import {PostuserService} from './postuser.service';

describe('PostuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostuserService]
    });
  });

  it('should be created', inject([PostuserService], (service: PostuserService) => {
    expect(service).toBeTruthy();
  }));
});
