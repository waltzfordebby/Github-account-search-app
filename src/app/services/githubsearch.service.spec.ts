import { TestBed, inject } from '@angular/core/testing';

import { GithubsearchService } from './githubsearch.service';

describe('GithubsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubsearchService]
    });
  });

  it('should be created', inject([GithubsearchService], (service: GithubsearchService) => {
    expect(service).toBeTruthy();
  }));
});
