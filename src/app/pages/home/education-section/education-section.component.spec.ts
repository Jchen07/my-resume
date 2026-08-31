import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectionComponent } from './education-section.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

describe('EducationSectionComponent', () => {
  let component: EducationSectionComponent;
  let fixture: ComponentFixture<EducationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSectionComponent, getTranslocoModule()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders both entries with the structured facts from PROFILE', async () => {
    await fixture.whenStable();
    const text = fixture.nativeElement.textContent as string;

    expect(fixture.nativeElement.querySelectorAll('ol > li')).toHaveLength(2);
    // Tech tags on the vocational entry and the UOC logo come from PROFILE.
    expect(text).toContain('Vue');
    expect(text).toContain('PHP');
    expect(text).toContain('MariaDB');

    const logos = Array.from(fixture.nativeElement.querySelectorAll('img')) as HTMLImageElement[];
    expect(logos.some(img => img.getAttribute('src')?.includes('uoc_logo'))).toBe(true);
  });

  it('shows the localized subtitle for each entry when the language changes', async () => {
    const transloco = TestBed.inject(TranslocoService);

    transloco.setActiveLang('en');
    await fixture.whenStable();
    let text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Open University of Catalonia');

    transloco.setActiveLang('es');
    await fixture.whenStable();
    text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Universidad Abierta de Cataluña');
  });
});
