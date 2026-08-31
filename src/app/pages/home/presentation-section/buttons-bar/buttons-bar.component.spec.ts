import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBarComponent } from './buttons-bar.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

describe('ButtonsBarComponent', () => {
  let component: ButtonsBarComponent;
  let fixture: ComponentFixture<ButtonsBarComponent>;

  const cvAnchor = () =>
    fixture.nativeElement.querySelector('a[type="application/pdf"]') as HTMLAnchorElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsBarComponent, getTranslocoModule(), FontAwesomeTestingModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('points the CV download at the file for the default language (es)', () => {
    const anchor = cvAnchor();
    expect(anchor.getAttribute('href')).toBe('assets/pdf/CV_Jie_Chen_es.pdf');
    expect(anchor.getAttribute('download')).toBe('CV_Jie_Chen_es.pdf');
  });

  it('retargets the CV download when the active language changes', async () => {
    const transloco = TestBed.inject(TranslocoService);

    transloco.setActiveLang('en');
    await fixture.whenStable();
    expect(cvAnchor().getAttribute('href')).toBe('assets/pdf/CV_Jie_Chen_en.pdf');
    expect(cvAnchor().getAttribute('download')).toBe('CV_Jie_Chen_en.pdf');

    transloco.setActiveLang('zh-CN');
    await fixture.whenStable();
    expect(cvAnchor().getAttribute('href')).toBe('assets/pdf/CV_Jie_Chen_zh-CN.pdf');
  });

  it('keeps the download confirmation and the other buttons intact', () => {
    const anchor = cvAnchor();
    expect(anchor.hasAttribute('jcOpenLinkConfirmation')).toBe(true);

    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);
    anchor.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    expect(confirmSpy).toHaveBeenCalled();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a[href^="https://www.linkedin.com"]')).toBeTruthy();
    expect(el.querySelector('a[href^="mailto:"]')).toBeTruthy();
  });
});
