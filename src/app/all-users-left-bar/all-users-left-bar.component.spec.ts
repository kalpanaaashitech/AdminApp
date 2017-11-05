import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersLeftBarComponent } from './all-users-left-bar.component';

describe('AllUsersLeftBarComponent', () => {
  let component: AllUsersLeftBarComponent;
  let fixture: ComponentFixture<AllUsersLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUsersLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
