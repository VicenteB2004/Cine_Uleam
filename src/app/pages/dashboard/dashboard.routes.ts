import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: 'cartelera',
        loadChildren: () =>
          import('../cartelera/cartelera.routes').then(m => m.carteleraRoutes),
      },
      {
        path: '',
        redirectTo: 'cartelera',
        pathMatch: 'full'
      }
    ]
  }
];
  