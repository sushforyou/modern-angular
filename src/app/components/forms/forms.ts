import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './forms.html',
  styleUrls: ['./forms.scss'],
})
export class Forms {
  formGroupDemo = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  fb = inject(FormBuilder);
  formBuilderDemo = this.fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}
