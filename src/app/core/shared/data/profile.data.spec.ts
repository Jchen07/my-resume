import ca from '../../../../../public/i18n/ca.json';
import en from '../../../../../public/i18n/en.json';
import es from '../../../../../public/i18n/es.json';
import zhCN from '../../../../../public/i18n/zh-CN.json';
import { GlobalConstants } from '../constants/global.constants';
import { formatDateRange } from './format-date.function';
import { PROFILE } from './profile.data';

interface Role {
  company: string;
  title: string;
  description: string;
}
interface EducationEntry {
  institution: string;
  title: string;
  description: string;
}
interface I18nDoc {
  home: {
    experience: { roles: Role[] };
    education: { entries: EducationEntry[] };
  };
  cv: {
    experience: { company: string; bullets: string[] }[];
    languageNames: Record<'es' | 'ca' | 'en' | 'zh', string>;
    languageLevels: Record<string, string>;
    skillGroups: Record<string, string>;
  };
}

const I18N: Record<string, I18nDoc> = { es, ca, en, 'zh-CN': zhCN };

function monthValue(value: string): number {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + (month - 1);
}

describe('PROFILE', () => {
  it('reuses the shared email constant', () => {
    expect(PROFILE.contact.email).toBe(GlobalConstants.email);
  });

  it('stores every date as YYYY-MM (end may be null)', () => {
    const ranges = [
      ...PROFILE.experience.map(e => e.dates),
      ...PROFILE.education.map(e => e.dates),
    ];
    for (const range of ranges) {
      expect(range.start).toMatch(/^\d{4}-\d{2}$/);
      if (range.end !== null) {
        expect(range.end).toMatch(/^\d{4}-\d{2}$/);
      }
    }
  });

  it('lists experience and education reverse-chronologically', () => {
    for (const list of [PROFILE.experience, PROFILE.education]) {
      for (let i = 1; i < list.length; i++) {
        expect(monthValue(list[i - 1].dates.start)).toBeGreaterThanOrEqual(
          monthValue(list[i].dates.start)
        );
      }
    }
  });

  it('keeps the i18n experience/education order aligned with PROFILE in every language', () => {
    for (const [lang, dict] of Object.entries(I18N)) {
      const roles = dict.home.experience.roles;
      const entries = dict.home.education.entries;

      expect(roles.length, `${lang} home.experience.roles length`).toBe(PROFILE.experience.length);
      expect(dict.cv.experience.length, `${lang} cv.experience length`).toBe(
        PROFILE.experience.length
      );
      expect(entries.length, `${lang} home.education.entries length`).toBe(
        PROFILE.education.length
      );

      PROFILE.experience.forEach((fact, i) => {
        expect(roles[i]?.company, `${lang} home.experience.roles[${i}].company`).toBe(fact.company);
        expect(dict.cv.experience[i]?.company, `${lang} cv.experience[${i}].company`).toBe(
          fact.company
        );
        expect(roles[i]?.title, `${lang} home.experience.roles[${i}].title`).toBeTruthy();
      });

      PROFILE.education.forEach((fact, i) => {
        expect(entries[i]?.institution, `${lang} home.education.entries[${i}].institution`).toBe(
          fact.institution
        );
        expect(entries[i]?.title, `${lang} home.education.entries[${i}].title`).toBeTruthy();
      });
    }
  });

  it('has CV bullets, skill-group, language-name and level labels in every language', () => {
    for (const [lang, dict] of Object.entries(I18N)) {
      dict.cv.experience.forEach((entry, i) => {
        expect(
          Array.isArray(entry.bullets) && entry.bullets.length > 0,
          `${lang} cv.experience[${i}].bullets`
        ).toBe(true);
      });
      for (const group of PROFILE.skills) {
        expect(dict.cv.skillGroups[group.id], `${lang} cv.skillGroups.${group.id}`).toBeTruthy();
      }
      for (const spoken of PROFILE.languages) {
        expect(
          dict.cv.languageNames[spoken.id],
          `${lang} cv.languageNames.${spoken.id}`
        ).toBeTruthy();
        expect(
          dict.cv.languageLevels[spoken.level],
          `${lang} cv.languageLevels.${spoken.level}`
        ).toBeTruthy();
      }
    }
  });
});

describe('formatDateRange', () => {
  it('formats a closed range in English', () => {
    expect(formatDateRange({ start: '2021-01', end: '2025-01' }, 'en', 'Present')).toBe(
      'Jan 2021 – Jan 2025'
    );
  });

  it('uses the present label when end is null', () => {
    expect(formatDateRange({ start: '2025-01', end: null }, 'en', 'Present')).toBe(
      'Jan 2025 – Present'
    );
  });

  it('localizes the month name per language', () => {
    const es = formatDateRange({ start: '2021-03', end: null }, 'es', 'Actualidad');
    expect(es).toContain('2021');
    expect(es.endsWith('Actualidad')).toBe(true);

    const zh = formatDateRange({ start: '2021-03', end: null }, 'zh-CN', '至今');
    expect(zh).toContain('2021');
    expect(zh.endsWith('至今')).toBe(true);
  });
});
