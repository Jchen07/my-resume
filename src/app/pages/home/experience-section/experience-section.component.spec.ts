import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSectionComponent } from './experience-section.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { provideZonelessChangeDetection } from '@angular/core';

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
});
