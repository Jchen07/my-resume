import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateButtonComponent } from './translate-button.component';
import { KeyValuePipe } from '@angular/common';
import { ClickOutsideDirective } from '@/app/core/shared/directives/click-outside.directive';
import { ClickEnterSpacebarDirective } from '@/app/core/shared/directives/click-enter-spacebar.directive';
import { TranslocoService } from '@jsverse/transloco';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';

describe('TranslateButtonComponent', () => {
  let component: TranslateButtonComponent;
  let fixture: ComponentFixture<TranslateButtonComponent>;
  let translocoService: TranslocoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateButtonComponent,
        KeyValuePipe,
        ClickOutsideDirective,
        ClickEnterSpacebarDirective,
        getTranslocoModule(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslateButtonComponent);
    component = fixture.componentInstance;
    translocoService = TestBed.inject(TranslocoService);
    fixture.detectChanges();
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
});
