import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDemoComponent } from './resource-demo.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ResourceDemoComponent', () => {
  let component: ResourceDemoComponent;
  let fixture: ComponentFixture<ResourceDemoComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceDemoComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ResourceDemoComponent);
    component = fixture.componentInstance;
  });

  it('should create', async () => {
    fixture.detectChanges();
    httpMock.expectOne('https://swapi.info/api/people/1').flush({ name: 'Luke Skywalker' });
    await fixture.whenStable();

    expect(component).toBeTruthy();
  });
});
