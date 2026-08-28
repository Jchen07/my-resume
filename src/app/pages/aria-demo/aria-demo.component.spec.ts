import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaDemoComponent } from './aria-demo.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AriaDemoComponent', () => {
  let component: AriaDemoComponent;
  let fixture: ComponentFixture<AriaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AriaDemoComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(AriaDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an option per framework', () => {
    const options = (fixture.nativeElement as HTMLElement).querySelectorAll('[ngOption]');
    expect(options.length).toBe(5);
  });
});
