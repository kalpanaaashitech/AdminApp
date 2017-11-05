import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabOneComponent } from './user-tab-one.component';

describe('UserTabOneComponent', () => {
  let component: UserTabOneComponent;
  let fixture: ComponentFixture<UserTabOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
