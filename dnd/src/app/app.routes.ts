import { Routes } from '@angular/router';

export const routes: Routes = [

  {path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },

  {path: 'defaultSettings',
    loadComponent: () => import('./pages/default-settings/default-settings').then(m => m.DefaultSettings)

  },
  {path: 'createdSession',
    loadComponent: () => import('./pages/created-session/created-session').then(m => m.CreatedSession)
  },

  {path: 'createSession',
    loadComponent: ()  => import('./pages/create-session/create-session').then(m => m.CreateSession)
  },

  { path: 'joinSession',
    loadComponent: () => import('./pages/join-session/join-session').then((m) => m.JoinSession)
  },

  { path: '**', redirectTo: 'home' },
];
