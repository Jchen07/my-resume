import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';
import { ClickOutsideDirective } from '@/app/core/shared/directives/click-outside.directive';
import { environment } from '@/environments/environment';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { GlobalConstants } from '@/app/core/shared/constants/global.constants';

interface NavbarOption {
  labelkey: string;
  href?: string;
  extern?: boolean;
}

@Component({
  selector: 'jc-navbar',
  imports: [
    TranslocoDirective,
    OpenLinkConfirmationDirective,
    ClickOutsideDirective,
    FaIconComponent,
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  options: NavbarOption[] = [
    { labelkey: 'home', href: `${environment.baseHref}/home#home` },
    { labelkey: 'experience', href: `${environment.baseHref}/home#experience` },
    { labelkey: 'education', href: `${environment.baseHref}/home#education` },
    // { labelkey: 'projects' },
    // { labelkey: 'about-me' },
    { labelkey: 'contact', href: `mailto:${GlobalConstants.email}`, extern: true },
  ];

  /** Mobile-only dropdown (below the `md` breakpoint). */
  protected readonly menuOpen = signal(false);

  constructor() {
    // The dropdown is `md:hidden`; if the viewport grows past the breakpoint while
    // it is open, close it so state and layout stay in sync.
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      const desktop = window.matchMedia('(min-width: 768px)');
      const onChange = (event: MediaQueryListEvent): void => {
        if (event.matches) {
          this.menuOpen.set(false);
        }
      };
      desktop.addEventListener('change', onChange);
      inject(DestroyRef).onDestroy(() => desktop.removeEventListener('change', onChange));
    }
  }

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  copyEmailToClipboard() {
    navigator.clipboard.writeText(GlobalConstants.email);
  }
}
