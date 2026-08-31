import { TagNameEnum } from '../../components/tag/models/tag-name.enum';

/**
 * Language-agnostic résumé facts. This module is the single source of truth shared by the
 * on-site experience/education sections and the build-time CV PDF generator, so it must stay
 * free of any `@angular/*` import and use only relative imports (no `@/` alias) — the Node
 * generator loads it through `tsx`.
 */

/** `YYYY-MM`; `end: null` renders as the localized "Present" label. */
export interface DateRange {
  start: string;
  end: string | null;
}

export interface ContactChannel {
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface ExperienceFact {
  company: string;
  companyUrl: string;
  /** File name under `public/assets/icons/`, consumed by the on-site timeline. */
  logo?: string;
  dates: DateRange;
  tags: TagNameEnum[];
}

export interface EducationFact {
  institution: string;
  institutionUrl?: string;
  logo?: string;
  dates: DateRange;
  tags?: TagNameEnum[];
}

export type SkillGroupId =
  'languages' | 'frameworks' | 'databases' | 'tools' | 'testing' | 'methods';

export interface SkillGroup {
  id: SkillGroupId;
  items: string[];
}

export type SpokenLanguageId = 'es' | 'ca' | 'en' | 'zh';
export type SpokenLanguageLevel = 'native' | 'bilingual' | 'c2' | 'c1' | 'b2' | 'advanced';

export interface SpokenLanguage {
  id: SpokenLanguageId;
  level: SpokenLanguageLevel;
}

export interface Profile {
  contact: ContactChannel;
  /**
   * Reverse-chronological; index order is render order AND must line up 1:1 with
   * `home.experience.roles[]` / `cv.experience[]` in every `public/i18n/*.json`.
   * `profile.data.spec.ts` enforces the alignment via the `company` anchor.
   */
  experience: ExperienceFact[];
  /** Reverse-chronological; aligns 1:1 with `home.education.entries[]` (anchored on `institution`). */
  education: EducationFact[];
  skills: SkillGroup[];
  languages: SpokenLanguage[];
}
