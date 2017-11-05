import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateUsersComponent } from './duplicate-users.component';

describe('DuplicateUsersComponent', () => {
  let component: DuplicateUsersComponent;
  let fixture: ComponentFixture<DuplicateUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
