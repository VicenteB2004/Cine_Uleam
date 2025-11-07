import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./log-in/log-in').then(m => m.LogIn)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register').then(m => m.Register)
    },
    {
        path: '**',redirectTo: 'login'
    }
] as Routes;