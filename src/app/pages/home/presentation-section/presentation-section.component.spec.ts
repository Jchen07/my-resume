import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSectionComponent } from './presentation-section.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('PresentationSectionComponent', () => {
  let component: PresentationSectionComponent;
  let fixture: ComponentFixture<PresentationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationSectionComponent, getTranslocoModule(), FontAwesomeTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
