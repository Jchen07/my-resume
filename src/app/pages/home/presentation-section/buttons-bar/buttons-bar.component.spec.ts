import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBarComponent } from './buttons-bar.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ButtonsBarComponent', () => {
  let component: ButtonsBarComponent;
  let fixture: ComponentFixture<ButtonsBarComponent>;

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
});
