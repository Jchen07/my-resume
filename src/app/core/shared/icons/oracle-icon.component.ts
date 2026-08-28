import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'jc-oracle-icon',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 24 24"
      [attr.width]="size()"
      [attr.height]="size()">
      <path
        fill="#C74634"
        d="M12 2C6.98 2 3 3.79 3 6v12c0 2.21 3.98 4 9 4s9-1.79 9-4V6c0-2.21-3.98-4-9-4Zm7 16c0 .78-2.69 2-7 2s-7-1.22-7-2v-2.68C6.66 16.36 9.2 17 12 17s5.34-.64 7-1.68V18Zm0-6c0 .78-2.69 2-7 2s-7-1.22-7-2V9.32C6.66 10.36 9.2 11 12 11s5.34-.64 7-1.68V12ZM12 8C7.69 8 5 6.78 5 6s2.69-2 7-2 7 1.22 7 2-2.69 2-7 2Z" />
    </svg>
  `,
})
export class OracleIconComponent {
  readonly size = input.required<string>();
}
