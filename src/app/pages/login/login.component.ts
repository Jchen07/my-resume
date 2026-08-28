import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { email, form, FormField, minLength, required, submit } from '@angular/forms/signals';
import { AuthService } from './auth/auth.service';
import { Permission } from './auth/auth.model';
import { AuthDirective } from '@/app/core/shared/directives/auth.directive';
import {
  readLocalStorage,
  writeLocalStorage,
} from '@/app/core/shared/functions/local-storage.function';

interface LoginModel {
  email: string;
  password: string;
}

@Component({
  selector: 'jc-login',
  imports: [FormField, AuthDirective],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center justify-center flex-col h-screen w-screen',
  },
})
export class LoginComponent {
  private static readonly emailStorageKey = 'login-email';

  private readonly authService = inject(AuthService);

  protected readonly Permission = Permission;
  protected readonly isAdmin = computed(
    () => this.authService.activePermission() === Permission.ADMIN
  );

  protected readonly model = signal<LoginModel>({
    email: this.readStoredEmail(),
    password: '',
  });

  private readonly rememberedEmail = computed(() => this.model().email);

  protected readonly loginForm = form(this.model, path => {
    required(path.email, { message: 'Email is required.' });
    email(path.email, { message: 'Enter a valid email address.' });
    required(path.password, { message: 'Password is required.' });
    minLength(path.password, 2, { message: 'Password must be at least 2 characters.' });
  });

  constructor() {
    // Remember the email across visits (only re-runs when the email itself changes).
    effect(() => {
      writeLocalStorage(LoginComponent.emailStorageKey, JSON.stringify(this.rememberedEmail()));
    });
  }

  protected async onSubmit(): Promise<void> {
    const ok = await submit(this.loginForm, async submitted => {
      const { email: enteredEmail, password } = submitted().value();
      this.authService.authenticate(enteredEmail, password);
      return undefined;
    });

    if (ok) {
      this.model.update(value => ({ ...value, password: '' }));
      this.loginForm().reset();
    }
  }

  private readStoredEmail(): string {
    const raw = readLocalStorage(LoginComponent.emailStorageKey);
    if (!raw) {
      return '';
    }
    try {
      const parsed: unknown = JSON.parse(raw);
      return typeof parsed === 'string' ? parsed : '';
    } catch {
      return '';
    }
  }
}
