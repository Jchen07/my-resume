import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSectionComponent } from './presentation-section.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';

describe('PresentationSectionComponent', () => {
  let component: PresentationSectionComponent;
  let fixture: ComponentFixture<PresentationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationSectionComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
