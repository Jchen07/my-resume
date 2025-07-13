import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectionComponent } from './education-section.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';

describe('EducationSectionComponent', () => {
  let component: EducationSectionComponent;
  let fixture: ComponentFixture<EducationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSectionComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
