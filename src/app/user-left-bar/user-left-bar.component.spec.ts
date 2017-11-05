import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeftBarComponent } from './user-left-bar.component';

describe('UserLeftBarComponent', () => {
  let component: UserLeftBarComponent;
  let fixture: ComponentFixture<UserLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
