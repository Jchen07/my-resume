import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./core/pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'login', // This page is for learning purposes.
    loadComponent: () => import('./core/pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
