import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth', loadChildren: () =>
        import('./auth/auth.routes').then(m => m.authRoutes)
  },


  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  {
    path: 'cartelera',
    loadChildren: () =>
      import('./pages/cartelera/cartelera.routes').then((m) => m.carteleraRoutes),
  },
  {
    path: 'entrada',
    loadComponent: () => import('./pages/entrada/entrada').then(m => m.Entrada),
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
