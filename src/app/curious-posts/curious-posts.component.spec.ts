import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousPostsComponent } from './curious-posts.component';

describe('CuriousPostsComponent', () => {
  let component: CuriousPostsComponent;
  let fixture: ComponentFixture<CuriousPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriousPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriousPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
