import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabFourComponent } from './user-tab-four.component';

describe('UserTabFourComponent', () => {
  let component: UserTabFourComponent;
  let fixture: ComponentFixture<UserTabFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
