import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';
import { AVAILABLE_LANGS } from './src/app/core/shared/constants/languages.constants';

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'public/i18n/',
  langs: [...AVAILABLE_LANGS],
  keysManager: {},
};

export default config;
