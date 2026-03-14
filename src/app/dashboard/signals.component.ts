import { Component, ChangeDetectionStrategy, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-signals',
  imports: [CommonModule],
  template: `
    <section>
      <h2>Signals</h2>
      <p>Basic signal demo and a computed value.</p>

      <div style="margin-top:1rem">
        <button (click)="increment()">Increment</button>
        <button (click)="reset()" style="margin-left:0.5rem">Reset</button>
      </div>

      <div style="margin-top:0.75rem">Count: {{ count() }}</div>
      <div>Double: {{ double() }}</div>
      <div style="margin-top:0.5rem">Last change: {{ lastChange }}</div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  count = signal(0);
  double = computed(() => this.count() * 2);
  lastChange = 'never';

  constructor() {
    effect(() => {
      // update lastChange whenever count changes
      this.lastChange = new Date().toLocaleTimeString();
      // read the signal to create dependency
      void this.count();
    });
  }

  increment() {
    this.count.update(n => n + 1);
  }

  reset() {
    this.count.set(0);
  }
}
