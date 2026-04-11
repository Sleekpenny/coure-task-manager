import { Routes } from '@angular/router';

export const routes: Routes = [ 
   {
    path: '',
    loadComponent: () => import('./shared/components/layouts/page-layout/page-layout.component').then((m) => m.PageLayoutComponent),
    loadChildren: () => import('./modules/routes').then((m) => m.routes),
  },   



];
