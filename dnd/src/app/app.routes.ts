import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'logIn', loadComponent: () => import('./pages/log-in/log-in').then((m) => m.LogIn) },
  { path: 'signIn', loadComponent: () => import('./pages/sign-in/sign-in').then((m) => m.SignIn) },
  {
    path: 'profileSettings',
    loadComponent: () =>
      import('./pages/profile-settings/profile-settings').then((m) => m.ProfileSettings)
  },
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
