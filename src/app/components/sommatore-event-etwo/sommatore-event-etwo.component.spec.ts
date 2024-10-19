import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommatoreEventEtwoComponent } from './sommatore-event-etwo.component';

describe('SommatoreEventEtwoComponent', () => {
  let component: SommatoreEventEtwoComponent;
  let fixture: ComponentFixture<SommatoreEventEtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SommatoreEventEtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SommatoreEventEtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
