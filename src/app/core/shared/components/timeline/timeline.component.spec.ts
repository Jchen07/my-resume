import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);

    // just to compile tests, it's not a real test
    fixture.componentRef.setInput('timeLines', null);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
