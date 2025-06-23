import { getTranslocoModule } from './transloco-testing.function';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('getTranslocoModule', () => {
  it('should return a TranslocoTestingModule', () => {
    const module = getTranslocoModule();
    expect(module.ngModule).toBe(TranslocoTestingModule);
  });

  it('should allow overriding options', () => {
    const options = { preloadLangs: false };
    const module = getTranslocoModule(options);
    expect(module.providers).toBeDefined();
  });
});
