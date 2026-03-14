import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-databinding',
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <h2>Data Binding</h2>
      <p>Property, event and two-way binding examples.</p>

      <div style="margin-top:1rem">
        <label>Input text (two-way): <input [(ngModel)]="name" /></label>
        <p>Interpolated value: {{ name }}</p>
      </div>

      <div style="margin-top:1rem">
        <button (click)="onClick()">Click me</button>
        <p>Last clicked: {{ lastClicked }}</p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabindingComponent {
  name = 'Angular';
  lastClicked = 'never';

  onClick() {
    this.lastClicked = new Date().toLocaleTimeString();
  }
}
