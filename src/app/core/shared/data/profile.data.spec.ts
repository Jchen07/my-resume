import en from '../../../../../public/i18n/en.json';
import es from '../../../../../public/i18n/es.json';
import zhCN from '../../../../../public/i18n/zh-CN.json';
import { GlobalConstants } from '../constants/global.constants';
import { formatDateRange } from './format-date.function';
import { PROFILE } from './profile.data';

interface ProseSlot {
  title: string;
}
interface I18nDoc {
  home: {
    experience: Record<'first' | 'second', ProseSlot>;
    education: Record<'first' | 'second', ProseSlot>;
  };
  cv: {
    experience: Record<'dxc' | 'indra', { bullets: string[] }>;
    languageNames: Record<'es' | 'ca' | 'en' | 'zh', string>;
    languageLevels: Record<string, string>;
    skillGroups: Record<string, string>;
  };
}

const I18N: Record<string, I18nDoc> = { es, en, 'zh-CN': zhCN };

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

  it('maps every experience/education id to prose present in all three languages', () => {
    const expBySlot = { indra: 'second', dxc: 'first' } as const;
    const eduBySlot = { uoc: 'second', 'grado-daw': 'first' } as const;

    for (const [lang, dict] of Object.entries(I18N)) {
      for (const fact of PROFILE.experience) {
        const slot = dict.home.experience[expBySlot[fact.id]];
        expect(slot?.title, `${lang} home.experience.${expBySlot[fact.id]}`).toBeTruthy();
      }
      for (const fact of PROFILE.education) {
        const slot = dict.home.education[eduBySlot[fact.id]];
        expect(slot?.title, `${lang} home.education.${eduBySlot[fact.id]}`).toBeTruthy();
      }
    }
  });

  it('has CV bullets, skill-group, language-name and level labels in every language', () => {
    for (const [lang, dict] of Object.entries(I18N)) {
      for (const fact of PROFILE.experience) {
        const bullets = dict.cv.experience[fact.id].bullets;
        expect(
          Array.isArray(bullets) && bullets.length > 0,
          `${lang} cv.experience.${fact.id}`
        ).toBe(true);
      }
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
