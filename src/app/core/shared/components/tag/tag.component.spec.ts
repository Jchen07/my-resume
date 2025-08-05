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

  it('should return default background color if name is unknow tag', async () => {
    const fixture = TestBed.createComponent(TagComponent);
    fixture.componentRef.setInput('name', 'unknown-tag' as TagNameEnum);
    const nativeElement = fixture.nativeElement;

    await fixture.whenStable();

    expect(nativeElement.querySelector('#tag-container').classList).toContain('bg-neutral-800');
    expect(nativeElement.querySelector('#tag-container').classList).toContain(
      'dark:bg-neutral-200'
    );
  });
});
