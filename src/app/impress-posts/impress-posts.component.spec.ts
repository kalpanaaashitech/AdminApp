import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressPostsComponent } from './impress-posts.component';

describe('ImpressPostsComponent', () => {
  let component: ImpressPostsComponent;
  let fixture: ComponentFixture<ImpressPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
