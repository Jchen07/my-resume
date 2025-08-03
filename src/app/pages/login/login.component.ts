import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Permission } from './auth/auth.model';
import { AuthDirective } from '@/app/core/shared/directives/auth.directive';

@Component({
  selector: 'jc-login',
  imports: [FormsModule, AuthDirective],
  templateUrl: './login.component.html',
  host: {
    class: 'flex items-center justify-center flex-col h-screen w-screen',
  },
})
export class LoginComponent {
  protected email = signal<string>('');
  protected password = signal<string>('');
  protected isAdmin = computed(() => this.authService.activePermission() === Permission.ADMIN);
  protected readonly Permission = Permission;

  private authService: AuthService = inject(AuthService);

  onSubmit(): void {
    this.authService.authenticate(this.email(), this.password());
  }
}
