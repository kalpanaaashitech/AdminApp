import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPostsComponent } from './travel-posts.component';

describe('TravelPostsComponent', () => {
  let component: TravelPostsComponent;
  let fixture: ComponentFixture<TravelPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
