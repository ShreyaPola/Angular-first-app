import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMobileComponent } from './add-new-mobile.component';

describe('AddNewMobileComponent', () => {
  let component: AddNewMobileComponent;
  let fixture: ComponentFixture<AddNewMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
