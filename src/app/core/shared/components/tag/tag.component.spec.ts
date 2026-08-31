import { TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TagComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent, getTranslocoModule()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create', async () => {
    const fixture = TestBed.createComponent(TagComponent);
    fixture.componentRef.setInput('name', TagNameEnum.ANGULAR);
    const component = fixture.componentInstance;

    await fixture.whenStable();

    expect(component).toBeTruthy();
  });

  it('renders the terminal chip for any tag, known or not', async () => {
    const fixture = TestBed.createComponent(TagComponent);
    fixture.componentRef.setInput('name', 'unknown-tag' as TagNameEnum);
    const nativeElement = fixture.nativeElement;

    await fixture.whenStable();

    const container = nativeElement.querySelector('#tag-container');
    expect(container.classList).toContain('bg-term-tag-bg');
    expect(container.classList).toContain('border-term-tag-border');
    expect(container.textContent.trim()).toBe('unknown-tag');
  });
});
