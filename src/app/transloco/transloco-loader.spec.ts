import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { BUILD_TIMESTAMP } from '@/build-info';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TranslocoHttpLoader', () => {
  let loader: TranslocoHttpLoader;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslocoHttpLoader,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
      ],
    });
    loader = TestBed.inject(TranslocoHttpLoader);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(loader).toBeTruthy();
  });

  it('should fetch translation for given language', () => {
    const lang = 'en';
    const mockTranslation = { hello: 'Hello' };
    loader.getTranslation(lang).subscribe(res => {
      expect(res).toEqual(mockTranslation);
    });
    const req = httpMock.expectOne(`${environment.baseUrl}/i18n/${lang}.json?v=${BUILD_TIMESTAMP}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTranslation);
  });
});
