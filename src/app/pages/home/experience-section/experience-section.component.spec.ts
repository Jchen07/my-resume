import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSectionComponent } from './experience-section.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

describe('ExperienceSectionComponent', () => {
  let component: ExperienceSectionComponent;
  let fixture: ComponentFixture<ExperienceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSectionComponent, getTranslocoModule()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders both roles with the structured facts from PROFILE', async () => {
    await fixture.whenStable();
    const text = fixture.nativeElement.textContent as string;

    expect(fixture.nativeElement.querySelectorAll('ol > li')).toHaveLength(2);
    // Company names, tech tags and the logo come from PROFILE, not the i18n JSON.
    expect(text).toContain('Indra (Minsait)');
    expect(text).toContain('DXC Technology');
    expect(text).toContain('Angular');
    expect(text).toContain('Oracle');
    expect(text).toContain('PostgreSQL');

    const logos = Array.from(fixture.nativeElement.querySelectorAll('img')) as HTMLImageElement[];
    expect(logos.some(img => img.getAttribute('src')?.includes('dxc_logo'))).toBe(true);
  });

  it('keeps each role paired with its localized prose when the language changes', async () => {
    const transloco = TestBed.inject(TranslocoService);

    transloco.setActiveLang('en');
    await fixture.whenStable();
    let text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Business Applications Engineer');
    expect(text).toContain('Indra (Minsait)');

    transloco.setActiveLang('es');
    await fixture.whenStable();
    text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Business Applications Engineer');
    expect(text).toContain('DXC Technology');
  });
});
