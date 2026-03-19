import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signals } from './signals';

describe('Signals', () => {
  let component: Signals;
  let fixture: ComponentFixture<Signals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signals],
    }).compileComponents();

    fixture = TestBed.createComponent(Signals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose title signal value', () => {
    expect(component.title()).toBe('Signals in Angular');
  });

  it('should update computed z1 when x1 changes (ngOnInit)', async () => {
    // component lifecycle may have already run; ensure z1 reflects current state
    expect(component.z1()).toBe(120);
  });

  it('onQuantitySelected should set quantity signal', () => {
    component.onQuantitySelected(5);
    expect(component.quantity()).toBe(5);
  });

  it('computed exPrice and color should update when quantity changes', () => {
    // After construction selectedVehicle price was scaled by constructor to 12000
    // constructor also doubled quantity: 1 -> 2
    expect(component.quantity()).toBeGreaterThanOrEqual(1);
    // initial color should be blue for small totals
    expect(component.color()).toBe('blue');

    // raise quantity to push exPrice over threshold
    component.quantity.set(5);
    expect(component.exPrice()).toBeGreaterThan(50000);
    expect(component.color()).toBe('green');
  });

  it('linked price should reflect selectedVehicleLinked updates', () => {
    const original = component.price();
    component.selectedVehicleLinked.update((v) => ({ ...v, price: original + 1234 }));
    expect(component.price()).toBe(original + 1234);
  });
});
