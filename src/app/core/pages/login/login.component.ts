import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@/app/core/pages/login/auth/auth.service';
import { Permission } from '@/app/core/pages/login/auth/auth.model';

@Component({
  selector: 'jc-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  host: {
    class: 'flex items-center justify-center flex-col h-screen w-screen',
  },
})
export class LoginComponent {
  email = signal<string>('');
  password = signal<string>('');

  isAdmin = computed(() => this.authService.activePermission() === Permission.ADMIN);

  private authService: AuthService = inject(AuthService);

  onSubmit(): void {
    this.authService.authenticate(this.email(), this.password());
  }
}
