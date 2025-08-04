import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { GlobalConstants } from '../../shared/constants/global.constants';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, getTranslocoModule(), FontAwesomeTestingModule],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navbar element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  });

  it('should copy the email to clipboard', () => {
    const component = new NavbarComponent();
    const spy = spyOn(navigator.clipboard, 'writeText').and.stub();

    component.copyEmailToClipboard();

    expect(spy).toHaveBeenCalledWith(GlobalConstants.email);
  });
});
