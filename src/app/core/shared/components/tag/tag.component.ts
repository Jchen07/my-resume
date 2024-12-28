import { ChangeDetectionStrategy, Component, computed, input, OnInit, signal } from '@angular/core';
import { AngularIconComponent } from '@/app/core/shared/icons/angular-icon.component';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';
import { JavaIconComponent } from '@/app/core/shared/icons/java-icon.component';
import { SpringIconComponent } from '@/app/core/shared/icons/spring-icon.component';
import { TypescriptIconComponent } from '@/app/core/shared/icons/typescript-icon.component';
import { PostgresqlIconComponent } from '@/app/core/shared/icons/postgresql.icon.component';
import { VueIconComponent } from '@/app/core/shared/icons/vue-icon.component';
import { PhpIconComponent } from '@/app/core/shared/icons/php-icon.component';
import { CSharpIconComponent } from '@/app/core/shared/icons/csharp-icon.component';
import { JavascriptIconComponent } from '@/app/core/shared/icons/javascript-icon.component';
import { MariaDBIconComponent } from '@/app/core/shared/icons/mariadb-icon.component';
import { tagColors } from '@/app/core/shared/components/tag/models/default-tag-color.enum';

@Component({
  selector: 'jc-tag',
  standalone: true,
  imports: [
    AngularIconComponent,
    JavaIconComponent,
    SpringIconComponent,
    TypescriptIconComponent,
    PostgresqlIconComponent,
    VueIconComponent,
    PhpIconComponent,
    CSharpIconComponent,
    JavascriptIconComponent,
    MariaDBIconComponent,
  ],
  templateUrl: './tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  name = input.required<TagNameEnum>();
  size = input<string>('18');
  backgroundColorInput = input<string>();

  backgroundColor = computed<string>(this._getBackgroundColor.bind(this));

  protected readonly TAG_NAME = TagNameEnum;

  private _getBackgroundColor(): string {
    return this.backgroundColorInput() || this._getDefaultBackgroundColor();
  }

  private _getDefaultBackgroundColor(): string {
    return tagColors[this.name()] || 'bg-neutral-800 dark:bg-neutral-200';
  }
}
