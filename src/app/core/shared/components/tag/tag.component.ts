import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
export class TagComponent implements OnInit {
  @Input() name!: string;
  @Input() size = '18';
  @Input() backgroundColor = '';

  protected readonly TAG_NAME = TagNameEnum;

  ngOnInit() {
    if (this.backgroundColor.length === 0) {
      this.backgroundColor = this.getDefaultTagColor();
    }
  }

  getDefaultTagColor(): string {
    switch (this.name) {
      case TagNameEnum.ANGULAR:
        return 'bg-fuchsia-950 dark:bg-violet-300';
      case TagNameEnum.JAVA:
        return 'bg-gray-700 dark:bg-orange-200';
      case TagNameEnum.SPRING_FRAMEWORK:
        return 'bg-teal-900 dark:bg-green-200';
      case TagNameEnum.TYPESCRIPT:
        return 'bg-indigo-800 dark:bg-indigo-300';
      case TagNameEnum.POSTGRE_SQL:
        return 'bg-blue-950 dark:bg-indigo-300';
      case TagNameEnum.VUE:
        return 'bg-emerald-600 dark:bg-emerald-200';
      case TagNameEnum.PHP:
        return 'bg-indigo-900 dark:bg-indigo-300';
      case TagNameEnum.CSHARP:
        return 'bg-purple-800 dark:bg-purple-300';
      case TagNameEnum.JAVASCRIPT:
        return 'bg-yellow-800 dark:bg-yellow-100';
      case TagNameEnum.MARIA_DB:
        return 'bg-orange-800 dark:bg-orange-100';
      default:
        return 'bg-neutral-800 dark:bg-neutral-200';
    }
  }
}
