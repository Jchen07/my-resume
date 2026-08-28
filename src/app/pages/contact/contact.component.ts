import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value === 'Jie') {
    return { forbiddenName: true };
  }
  return null;
}

function emailIsUnique(control: AbstractControl): Observable<ValidationErrors | null> {
  // Simulate an async HTTP request to backend to chech email uniqueness
  if (control.value === 'test@example.com') {
    return of({ emailNotUnique: true }).pipe(delay(1000));
  }
  return of(null).pipe(delay(1000));
}

@Component({
  selector: 'jc-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  host: {
    class: 'flex items-center justify-center flex-col h-screen w-screen',
  },
})
export class ContactComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, forbiddenNameValidator]),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailIsUnique],
    }),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
