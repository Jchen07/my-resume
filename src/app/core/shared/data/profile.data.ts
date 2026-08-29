import { TagNameEnum } from '../components/tag/models/tag-name.enum';
import { GlobalConstants } from '../constants/global.constants';
import { Profile } from './models/profile.interface';

/**
 * The résumé, as structured data. Translatable prose (titles, descriptions, bullets, section
 * headings) lives in `public/i18n/*.json` under `home.*` / `cv.*`; this file holds only the
 * facts that do not change between languages.
 *
 * Angular-free on purpose — see `profile.interface.ts`.
 */
export const PROFILE: Profile = {
  contact: {
    email: GlobalConstants.email,
    // From the previous hand-authored PDF; middle digits were recovered from a corrupted font
    // map — confirm before publishing.
    phone: '+34 651 68 36 55',
    linkedinUrl: 'https://www.linkedin.com/in/jc-jie-chen',
    githubUrl: 'https://github.com/Jchen07',
  },

  // Reverse-chronological. Each entry lines up by index with `home.experience.roles[]` and
  // `cv.experience[]` in the i18n JSON (anchored on `company` — see profile.data.spec.ts).
  experience: [
    {
      company: 'Indra (Minsait)',
      companyUrl: 'https://www.minsait.com/',
      dates: { start: '2025-08', end: null },
      tags: [
        TagNameEnum.ANGULAR,
        TagNameEnum.JAVA,
        TagNameEnum.SPRING_FRAMEWORK,
        TagNameEnum.TYPESCRIPT,
        TagNameEnum.ORACLE,
      ],
    },
    {
      company: 'DXC Technology',
      companyUrl: 'https://dxc.com/',
      logo: 'dxc_logo.svg',
      dates: { start: '2021-11', end: '2025-08' },
      tags: [
        TagNameEnum.ANGULAR,
        TagNameEnum.JAVA,
        TagNameEnum.SPRING_FRAMEWORK,
        TagNameEnum.TYPESCRIPT,
        TagNameEnum.POSTGRE_SQL,
      ],
    },
  ],

  // Reverse-chronological. Aligns by index with `home.education.entries[]` (anchor: `institution`).
  education: [
    {
      institution: 'Open University of Catalonia (UOC)',
      institutionUrl: 'https://www.uoc.edu/',
      logo: 'uoc_logo.webp',
      dates: { start: '2024-09', end: null },
    },
    {
      institution: 'Institut Montilivi',
      dates: { start: '2020-09', end: '2022-06' },
      tags: [
        TagNameEnum.VUE,
        TagNameEnum.PHP,
        TagNameEnum.CSHARP,
        TagNameEnum.JAVASCRIPT,
        TagNameEnum.MARIA_DB,
      ],
    },
  ],

  skills: [
    {
      id: 'languages',
      items: ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP', 'SQL', 'HTML5', 'CSS3'],
    },
    { id: 'frameworks', items: ['Angular', 'Spring Boot', 'Vue.js', '.NET'] },
    { id: 'databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MariaDB'] },
    { id: 'tools', items: ['Git', 'GitHub', 'Docker', 'Jira', 'WordPress', 'Moodle'] },
    { id: 'testing', items: ['Selenium', 'Karma', 'Jasmine', 'JUnit', 'Vitest'] },
    {
      id: 'methods',
      items: [
        'Responsive design',
        'REST',
        'SOAP / WSDL',
        'JSON',
        'XML',
        'Micro-frontends',
        'Micro-services',
      ],
    },
  ],

  languages: [
    { id: 'es', level: 'bilingual' },
    { id: 'ca', level: 'bilingual' },
    { id: 'en', level: 'b2' },
    { id: 'zh', level: 'advanced' },
  ],
};
