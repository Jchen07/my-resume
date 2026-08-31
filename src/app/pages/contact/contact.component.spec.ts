import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid while empty and reject the forbidden name', async () => {
    expect(component['contactForm']().valid()).toBe(false);

    component['model'].set({ name: 'Jie', email: 'a@b.com', message: 'a valid message' });
    await fixture.whenStable();

    const nameErrors = component['contactForm'].name().errors();
    expect(nameErrors.some(error => error.kind === 'forbiddenName')).toBe(true);
  });
});
