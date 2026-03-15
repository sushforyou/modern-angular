import { Component, computed, effect, linkedSignal, signal, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-signals',
  imports: [CommonModule, FormsModule],
  templateUrl: './signals.html',
  styleUrls: ['./signals.scss'],
})
export class Signals implements OnInit {
  title = signal('Signals in Angular');
  x = 10;
  y = 20;
  z = this.x + this.y;
  x1 = signal(10);
  y1 = signal(20);
  z1 = computed(() => this.x1() + this.y1());
  firstName = signal('Sushant');
  lastName = signal('Kunkekar');
  uppperCaseName = linkedSignal({
    source: this.firstName,
    computation:(newValue) => 
      newValue.toUpperCase()
  });
  vehiclesLinked = signal([
    { name: 'Car', price: 10000 },
    { name: 'Bike', price: 5000 },
  ]);
  selectedVehicleLinked = signal(this.vehiclesLinked()[0]);

  price = linkedSignal(() => this.selectedVehicleLinked().price);

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
  
  // Tailwind dropdown state
  showQtyDropdown = signal(false);

  toggleQtyDropdown() {
    this.showQtyDropdown.update(v => !v);
  }

  selectQty(qty: number) {
    this.quantity.set(qty);
    this.showQtyDropdown.set(false);
  }
  ngOnInit() {
    this.x = 100;
    this.x1.set(100);
    setTimeout(() => { 
      this.lastName.set('Sush');
      
    }, 5000);
  }
}
