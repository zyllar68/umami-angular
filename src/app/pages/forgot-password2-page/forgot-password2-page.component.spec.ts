import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassword2PageComponent } from './forgot-password2-page.component';

describe('ForgotPassword2PageComponent', () => {
  let component: ForgotPassword2PageComponent;
  let fixture: ComponentFixture<ForgotPassword2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassword2PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPassword2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
