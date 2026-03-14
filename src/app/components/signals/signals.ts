import { Component, computed, effect, signal } from '@angular/core';
import { Vehicle } from './vehicle';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-signals',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './signals.html',
  styleUrls: ['./signals.scss'],
})
export class Signals {
  title = signal('Signals in Angular');
  x = 10;
  y = 20;
  z = this.x + this.y;
  x1 = signal(10);
  y1 = signal(20);
  z1 = computed(() => this.x1() + this.y1());
  quantity = signal<number>(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  selectedVehicle = signal<Vehicle>({ id: 1, name: 'AT-AT', price: 10000 });

  vehicles = signal<Vehicle[]>([]);

  exPrice = computed(() => this.selectedVehicle().price * this.quantity());
  color = computed(() => (this.exPrice() > 50000 ? 'green' : 'blue'));

  constructor() {
    console.log(this.quantity());

    // Two for one sale
    this.quantity.update((qty) => qty * 2);

    this.selectedVehicle.update((v) => ({ ...v, price: v.price * 1.2 }));

    // Add selected vehicle to array
    this.vehicles.update((v) => [...v, this.selectedVehicle()]);

    // Example of an effect
    effect(() => console.log(JSON.stringify(this.vehicles())));
  }

  // Example of a declarative effect
  qtyEff = effect(() => console.log('Latest quantity:', this.quantity()));

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }
  ngOnInit() {
    this.x = 100;
    this.x1.set(100);
  }
}
