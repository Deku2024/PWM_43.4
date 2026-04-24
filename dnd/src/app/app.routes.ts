import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'logIn', loadComponent: () => import('./pages/log-in/log-in').then((m) => m.LogIn) },
  { path: 'signIn', loadComponent: () => import('./pages/sign-in/sign-in').then((m) => m.SignIn) },
  {
    path: 'profileSettings',
    loadComponent: () =>
      import('./pages/profile-settings/profile-settings').then((m) => m.ProfileSettings),
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

  {
    path: 'profileSettings',
    loadComponent: () => import('./pages/profile-settings/profile-settings').then(m => m.ProfileSettings)
  },

  { path: 'joinSession', loadComponent: () => import('./pages/join-session/join-session').then((m) => m.JoinSession) },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home) },
  {
    path: 'player-campaign-main',
    loadComponent: () =>
      import('./pages/player-campaign-main/player-campaign-main').then((m) => m.PlayerCampaignMain),
  },
  { path: 'joinSession',
    loadComponent: () =>
      import('./pages/join-session/join-session').then((m) => m.JoinSession) },
  { path: '**', redirectTo: 'home' },
];
