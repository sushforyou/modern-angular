import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-forms',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section>
      <h2>Forms (Reactive)</h2>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <label>
          Name
          <input formControlName="name" />
        </label>
        <div *ngIf="form.controls.name.invalid && form.controls.name.touched" style="color:tomato">Name is required</div>

        <label style="display:block;margin-top:0.5rem">
          Email
          <input formControlName="email" />
        </label>
        <div *ngIf="form.controls.email.invalid && form.controls.email.touched" style="color:tomato">Enter a valid email</div>

        <button type="submit" [disabled]="form.invalid" style="margin-top:0.75rem">Submit</button>
      </form>

      <div style="margin-top:1rem">Submitted: {{ submitted() }}</div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  submitted = signal('none');

  submit() {
    if (this.form.valid) {
      this.submitted.set(JSON.stringify(this.form.value));
      this.form.reset();
    }
  }
}
