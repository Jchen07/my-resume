import { afterNextRender, Component, computed, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Permission } from './auth/auth.model';
import { AuthDirective } from '@/app/core/shared/directives/auth.directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'jc-login',
  imports: [FormsModule, AuthDirective],
  templateUrl: './login.component.html',
  host: {
    class: 'flex items-center justify-center flex-col h-screen w-screen',
  },
})
export class LoginComponent {
  private static readonly emailLocalStorageKey = 'login-email';

  protected isAdmin = computed(() => this.authService.activePermission() === Permission.ADMIN);
  protected readonly Permission = Permission;

  private form = viewChild<NgForm>('form');
  private authService: AuthService = inject(AuthService);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedEmail = window.localStorage.getItem(LoginComponent.emailLocalStorageKey);
      if (savedEmail) {
        const email = JSON.parse(savedEmail);
        // workaound to template driven form not being ready yet
        setTimeout(() => {
          this.form()?.form.patchValue({ email });
        }, 1);
      }

      this.form()
        ?.valueChanges?.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(500))
        .subscribe(value => {
          window.localStorage.setItem(
            LoginComponent.emailLocalStorageKey,
            JSON.stringify(value.email)
          );
        });
    });
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      alert('Form is invalid');
      return;
    }

    this.authService.authenticate(form.value.email, form.value.password);
    form.resetForm();
  }
}
