import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup1PageComponent } from './signup1-page.component';

describe('Signup1PageComponent', () => {
  let component: Signup1PageComponent;
  let fixture: ComponentFixture<Signup1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signup1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signup1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
