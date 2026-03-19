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

  // Code snippets to display in the template (right column)
  codeGroup = `formGroupDemo = new FormGroup({\n  email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(5)]),\n  password: new FormControl('', [Validators.required, Validators.minLength(6)]),\n})`;

  codeBuilder = `fb = inject(FormBuilder);\nformBuilderDemo = this.fb.nonNullable.group({\n  email: ['', [Validators.email, Validators.required, Validators.minLength(5)]],\n  password: ['', [Validators.required, Validators.minLength(6)]],\n}); Also its non nullable after RESET`;
}
