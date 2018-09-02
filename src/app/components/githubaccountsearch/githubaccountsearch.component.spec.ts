import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubaccountsearchComponent } from './githubaccountsearch.component';

describe('GithubaccountsearchComponent', () => {
  let component: GithubaccountsearchComponent;
  let fixture: ComponentFixture<GithubaccountsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubaccountsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubaccountsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
