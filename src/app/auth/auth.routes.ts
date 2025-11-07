import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./log-in/log-in').then(m => m.LogIn)
    },
    {
        path: '**',redirectTo: 'login'
    }
] as Routes;