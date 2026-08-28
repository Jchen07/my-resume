import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateButtonComponent } from './translate-button.component';
import { TranslocoService } from '@jsverse/transloco';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TranslateButtonComponent', () => {
  let component: TranslateButtonComponent;
  let fixture: ComponentFixture<TranslateButtonComponent>;
  let translocoService: TranslocoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateButtonComponent, getTranslocoModule()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslateButtonComponent);
    component = fixture.componentInstance;
    translocoService = TestBed.inject(TranslocoService);
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menuVisible when openDialog is called', () => {
    expect(component.menuVisible()).toBe(false);
    component.openDialog();
    expect(component.menuVisible()).toBe(true);
    component.openDialog();
    expect(component.menuVisible()).toBe(false);
  });

  it('should hide menu when hideMenu is called', () => {
    component.menuVisible.set(true);
    component.hideMenu();
    expect(component.menuVisible()).toBe(false);
  });

  it('should call setActiveLang and hideMenu when changeLanguage is called', () => {
    vi.spyOn(component, 'hideMenu').mockReturnValue(undefined);
    vi.spyOn(translocoService, 'setActiveLang').mockReturnValue(translocoService);

    component.changeLanguage('en');

    expect(translocoService.setActiveLang).toHaveBeenCalledWith('en');
    expect(component.hideMenu).toHaveBeenCalled();
  });

  // just a test to try spyOn with throwError
  it('should throw an error', () => {
    vi.spyOn(translocoService, 'setActiveLang').mockImplementation(() => {
      throw new Error('Test error');
    });
    expect(() => component.changeLanguage('en')).toThrowError('Test error');
  });
});
