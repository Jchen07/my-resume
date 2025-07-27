import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'login', // TODO: This page is for learning purposes.
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'resource-demo', // TODO: This page is for learning purposes.
    loadComponent: () =>
      import('./pages/resource-demo/resource-demo.component').then(m => m.ResourceDemoComponent),
  },
  {
    path: 'content-child-demo', // TODO: This page is for learning purposes.
    loadComponent: () =>
      import('./pages/content-child-demo/content-child-demo.component').then(
        m => m.ContentChildDemo
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  },
];
