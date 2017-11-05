import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabThreeComponent } from './user-tab-three.component';

describe('UserTabThreeComponent', () => {
  let component: UserTabThreeComponent;
  let fixture: ComponentFixture<UserTabThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
