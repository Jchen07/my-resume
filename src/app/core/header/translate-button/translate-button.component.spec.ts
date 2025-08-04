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
    // Reset all Jasmine spies after each test to avoid side effects
    jasmine.getEnv().allowRespy(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menuVisible when openDialog is called', () => {
    expect(component.menuVisible()).toBeFalse();
    component.openDialog();
    expect(component.menuVisible()).toBeTrue();
    component.openDialog();
    expect(component.menuVisible()).toBeFalse();
  });

  it('should hide menu when hideMenu is called', () => {
    component.menuVisible.set(true);
    component.hideMenu();
    expect(component.menuVisible()).toBeFalse();
  });

  it('should call setActiveLang and hideMenu when changeLanguage is called', () => {
    spyOn(component, 'hideMenu').and.stub();
    spyOn(translocoService, 'setActiveLang').and.stub();

    component.changeLanguage('en');

    expect(translocoService.setActiveLang).toHaveBeenCalledWith('en');
    expect(component.hideMenu).toHaveBeenCalled();
  });

  // just a test to try spyOn with throwError
  it('should throw an error', () => {
    spyOn(translocoService, 'setActiveLang').and.throwError('Test error');
    expect(() => component.changeLanguage('en')).toThrowError('Test error');
  });
});
