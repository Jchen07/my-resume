import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';

export const tagColors: Record<TagNameEnum, string> = {
  [TagNameEnum.ANGULAR]:
    'bg-gray-300 shadow-sm shadow-violet-300 dark:shadow-none dark:bg-violet-300',
  [TagNameEnum.JAVA]: 'bg-gray-300 shadow-sm shadow-orange-200 dark:shadow-none dark:bg-orange-200',
  [TagNameEnum.SPRING_FRAMEWORK]:
    'bg-gray-300 shadow-sm shadow-green-200 dark:shadow-none dark:bg-green-200',
  [TagNameEnum.TYPESCRIPT]:
    'bg-gray-300 shadow-sm shadow-indigo-300 dark:shadow-none dark:bg-indigo-300',
  [TagNameEnum.POSTGRE_SQL]:
    'bg-gray-300 shadow-sm shadow-indigo-300 dark:shadow-none dark:bg-indigo-300',
  [TagNameEnum.VUE]:
    'bg-gray-300 shadow-sm shadow-emerald-200 dark:shadow-none dark:bg-emerald-200',
  [TagNameEnum.PHP]: 'bg-gray-300 shadow-sm shadow-indigo-300 dark:shadow-none dark:bg-indigo-300',
  [TagNameEnum.CSHARP]:
    'bg-gray-300 shadow-sm shadow-purple-300 dark:shadow-none dark:bg-purple-300',
  [TagNameEnum.JAVASCRIPT]:
    'bg-gray-300 shadow-sm shadow-yellow-100 dark:shadow-none dark:bg-yellow-100',
  [TagNameEnum.MARIA_DB]:
    'bg-gray-300 shadow-sm shadow-orange-100 dark:shadow-none dark:bg-orange-100',
};
