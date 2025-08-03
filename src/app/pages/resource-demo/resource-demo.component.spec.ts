// TODO: Fix this test

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ResourceDemoComponent } from './resource-demo.component';
// import { provideHttpClientTesting } from '@angular/common/http/testing';
// import { provideZonelessChangeDetection } from '@angular/core';
// import { provideHttpClient } from '@angular/common/http';
// import { HttpTestingController } from '@angular/common/http/testing';

// describe('ResourceDemoComponent', () => {
//   let component: ResourceDemoComponent;
//   let fixture: ComponentFixture<ResourceDemoComponent>;
//   let httpMock: HttpTestingController;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ResourceDemoComponent],
//       providers: [
//         provideHttpClient(),
//         provideHttpClientTesting(),
//         provideZonelessChangeDetection(),
//       ],
//     }).compileComponents();

//     httpMock = TestBed.inject(HttpTestingController);
//     fixture = TestBed.createComponent(ResourceDemoComponent);
//     component = fixture.componentInstance;

//     await fixture.whenStable();
//   });

// it('should create', () => {
//   expect(component).toBeTruthy();
// });

// it('should only trigger one time', fakeAsync(() => {
//   const id = signal(10);
//   const response = httpResource(() => `https://swapi.info/api/people/${id()}`, {
//     injector: TestBed.inject(Injector),
//   });
//   tick(); // Triggers the effect

//   const firstRequest = httpMock.expectOne('https://swapi.info/api/people/10');
//   firstRequest.flush(99);

//   tick();

//   expect(response.value()).toEqual(99);
// }));

// it('should make both API calls on init', fakeAsync(() => {
//   // Avanza el tiempo para permitir que los recursos hagan la petición
//   tick();

//   const swapiReq = httpMock.expectOne('https://swapi.info/api/people/1');
//   expect(swapiReq.request.method).toBe('GET');
//   swapiReq.flush({ name: 'Luke Skywalker' });

//   tick(); // Deja tiempo para procesar respuestas

//   expect(component.personResource.value()).toEqual({ name: 'Luke Skywalker' });

//   httpMock.verify(); // Asegúrate de que no hay más peticiones pendientes
// }));
// });
