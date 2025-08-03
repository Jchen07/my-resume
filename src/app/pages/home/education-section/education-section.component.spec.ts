import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectionComponent } from './education-section.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { provideZonelessChangeDetection } from '@angular/core';

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
});
