import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from '@/app/pages/login/auth/auth.model';
import { AuthService } from '@/app/pages/login/auth/auth.service';

@Directive({
  selector: '[jcAuth]',
})
export class AuthDirective {
  readonly userType = input.required<Permission>({ alias: 'jcAuth' });
  private readonly authService = inject(AuthService);
  private readonly template = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);

  private hasView = false;

  constructor() {
    effect(() => {
      const shouldRender = this.authService.activePermission() === this.userType();

      if (shouldRender && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.template, {
          $implicit: 'let variable',
          test: 'test',
        });
        this.hasView = true;
      } else if (!shouldRender && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }
}
