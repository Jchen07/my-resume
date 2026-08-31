import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDemoComponent } from './state-demo.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { testFeature } from '@/app/state/test/test.feature';

describe('StateDemoComponent', () => {
  let component: StateDemoComponent;
  let fixture: ComponentFixture<StateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateDemoComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideStore(),
        provideState(testFeature),
        provideEffects([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StateDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
