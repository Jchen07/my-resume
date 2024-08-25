import { Injectable } from '@angular/core';
import { TestModel } from '@/app/state/test/models/test.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
  testResponse(): Observable<TestModel> {
    return of({ backgroundColor: 'bg-red-100', title: 'My portafolio Jie Chen' }).pipe(delay(1500));
  }
}
