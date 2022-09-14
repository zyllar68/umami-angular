import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup2PageComponent } from './signup2-page.component';

describe('Signup2PageComponent', () => {
  let component: Signup2PageComponent;
  let fixture: ComponentFixture<Signup2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signup2PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signup2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
