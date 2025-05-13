import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';
import { getTranslocoModule } from '@/app/core/shared/functions/transloco-testing.function';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(TagComponent);

    fixture.componentRef.setInput('name', TagNameEnum.ANGULAR);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
