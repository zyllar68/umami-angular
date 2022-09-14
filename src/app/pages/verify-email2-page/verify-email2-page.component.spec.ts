import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmail2PageComponent } from './verify-email2-page.component';

describe('VerifyEmail2PageComponent', () => {
  let component: VerifyEmail2PageComponent;
  let fixture: ComponentFixture<VerifyEmail2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEmail2PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmail2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
