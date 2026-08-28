import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

describe('AppComponent', () => {
  beforeEach(async () => {
    // document.documentElement is a process-wide global; clear it so the assertion below
    // reflects what AppComponent's effect actually did, not a leftover value.
    document.documentElement.lang = '';

    await TestBed.configureTestingModule({
      imports: [AppComponent, getTranslocoModule()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should sync <html lang> with the active language', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();

    const activeLang = TestBed.inject(TranslocoService).getActiveLang();
    expect(document.documentElement.lang).toBe(activeLang);
  });

  it('should contain header, footer and router-outlet', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(compiled.querySelector('jc-header')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('jc-footer')).toBeTruthy();
  });
});
