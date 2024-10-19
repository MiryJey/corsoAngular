import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestoTwoComponent } from './input-testo-two.component';

describe('InputTestoTwoComponent', () => {
  let component: InputTestoTwoComponent;
  let fixture: ComponentFixture<InputTestoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTestoTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTestoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
