import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';

export interface TimeLine {
  time: string;
  tags?: TagNameEnum[];
  title: string;
  subtitle?: string;
  icon?: string;
  link?: string;
  description: string;
}
