import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';

export const tagColors: Record<TagNameEnum, string> = {
  [TagNameEnum.ANGULAR]: 'bg-fuchsia-950 dark:bg-violet-300',
  [TagNameEnum.JAVA]: 'bg-gray-700 dark:bg-orange-200',
  [TagNameEnum.SPRING_FRAMEWORK]: 'bg-teal-900 dark:bg-green-200',
  [TagNameEnum.TYPESCRIPT]: 'bg-indigo-800 dark:bg-indigo-300',
  [TagNameEnum.POSTGRE_SQL]: 'bg-blue-950 dark:bg-indigo-300',
  [TagNameEnum.VUE]: 'bg-emerald-600 dark:bg-emerald-200',
  [TagNameEnum.PHP]: 'bg-indigo-900 dark:bg-indigo-300',
  [TagNameEnum.CSHARP]: 'bg-purple-800 dark:bg-purple-300',
  [TagNameEnum.JAVASCRIPT]: 'bg-yellow-800 dark:bg-yellow-100',
  [TagNameEnum.MARIA_DB]: 'bg-orange-800 dark:bg-orange-100',
};
