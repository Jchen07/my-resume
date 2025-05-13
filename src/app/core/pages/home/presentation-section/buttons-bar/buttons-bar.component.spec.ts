import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBarComponent } from './buttons-bar.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';

describe('ButtonsBarComponent', () => {
  let component: ButtonsBarComponent;
  let fixture: ComponentFixture<ButtonsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsBarComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
