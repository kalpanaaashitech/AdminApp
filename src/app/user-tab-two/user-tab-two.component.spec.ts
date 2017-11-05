import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabTwoComponent } from './user-tab-two.component';

describe('UserTabTwoComponent', () => {
  let component: UserTabTwoComponent;
  let fixture: ComponentFixture<UserTabTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
