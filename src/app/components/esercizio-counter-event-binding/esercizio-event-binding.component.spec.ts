import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercizioEventBindingComponent } from './esercizio-event-binding.component';

describe('EsercizioEventBindingComponent', () => {
  let component: EsercizioEventBindingComponent;
  let fixture: ComponentFixture<EsercizioEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsercizioEventBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsercizioEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
