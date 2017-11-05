import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressPostsComponent } from './express-posts.component';

describe('ExpressPostsComponent', () => {
  let component: ExpressPostsComponent;
  let fixture: ComponentFixture<ExpressPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
