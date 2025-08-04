import { TestBed } from '@angular/core/testing';
import { ThemeButtonComponent } from './theme-button.component';
import { getTranslocoModule } from '../../shared/functions/transloco-testing.function';
import { provideZonelessChangeDetection } from '@angular/core';
import { ModeEnum } from '../models/mode.enum';

describe('TheemButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeButtonComponent, getTranslocoModule()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents;
  });

  afterEach(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem(ThemeButtonComponent.THEME_STORAGE_NAME);
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ThemeButtonComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should setMode to dark mode', () => {
    const fixture = TestBed.createComponent(ThemeButtonComponent);
    const component = fixture.componentInstance;
    component.setMode(ModeEnum.DARK);
    expect(document.documentElement.classList.contains('dark')).toBeTrue();
    expect(localStorage.getItem(ThemeButtonComponent.THEME_STORAGE_NAME)).toBe('dark');
  });

  it('should setMode to light mode', () => {
    const fixture = TestBed.createComponent(ThemeButtonComponent);
    const component = fixture.componentInstance;
    document.documentElement.classList.add('dark'); // Ensure dark mode is set before switching

    component.setMode(ModeEnum.LIGHT);

    expect(localStorage.getItem(ThemeButtonComponent.THEME_STORAGE_NAME)).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBeFalse();
  });

  it('should display the light/dark icons correctly', async () => {
    const fixture = TestBed.createComponent(ThemeButtonComponent);
    const component = fixture.componentInstance;
    const template = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(template.querySelector('#dark-mode-icon')).toBeTruthy(); // Dark mode icon should be present initially because it's light mode by default

    component.setMode(ModeEnum.DARK);
    await fixture.whenStable();

    expect(template.querySelector('#light-mode-icon')).toBeTruthy();

    component.setMode(ModeEnum.LIGHT);
    await fixture.whenStable();

    expect(template.querySelector('#dark-mode-icon')).toBeTruthy();
  });
});
