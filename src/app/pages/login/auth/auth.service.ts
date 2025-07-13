import { Injectable, signal } from '@angular/core';

import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  activePermission = signal<Permission>(Permission.GUEST);

  authenticate(email: string, password: string) {
    if (email === 'admin@example.com' && password === 'admin') {
      this.activePermission.set(Permission.ADMIN);
    } else if (email === 'user@example.com' && password === 'user') {
      this.activePermission.set(Permission.USER);
    } else {
      this.activePermission.set(Permission.GUEST);
    }
  }

  logout() {
    this.activePermission.set(Permission.GUEST);
  }
}
