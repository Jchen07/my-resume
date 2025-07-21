import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDemoComponent } from './resource-demo.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApplicationRef, Injector } from '@angular/core';
import { httpResource, provideHttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

describe('ResourceDemoComponent', () => {
  let component: ResourceDemoComponent;
  let fixture: ComponentFixture<ResourceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceDemoComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    const id = signal(10);
    const mockBackend = TestBed.inject(HttpTestingController);
    const response = httpResource(() => `https://swapi.info/api/people/${id()}`, {
      injector: TestBed.inject(Injector),
    });
    TestBed.tick(); // Triggers the effect

    const firstRequest = mockBackend.expectOne('https://swapi.info/api/people/10');
    firstRequest.flush(0);

    // Ensures the values are propagated to the httpResource
    await TestBed.inject(ApplicationRef).whenStable();
    expect(response.value()).toEqual(0);

    fixture = TestBed.createComponent(ResourceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only trigger one time', async () => {});
});
