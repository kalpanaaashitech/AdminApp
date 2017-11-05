import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePostsComponent } from './explore-posts.component';

describe('ExplorePostsComponent', () => {
  let component: ExplorePostsComponent;
  let fixture: ComponentFixture<ExplorePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
