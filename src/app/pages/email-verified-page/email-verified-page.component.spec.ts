import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedPageComponent } from './email-verified-page.component';

describe('EmailVerifiedPageComponent', () => {
  let component: EmailVerifiedPageComponent;
  let fixture: ComponentFixture<EmailVerifiedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVerifiedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerifiedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
