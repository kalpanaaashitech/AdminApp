import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversePostsComponent } from './converse-posts.component';

describe('ConversePostsComponent', () => {
  let component: ConversePostsComponent;
  let fixture: ComponentFixture<ConversePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
