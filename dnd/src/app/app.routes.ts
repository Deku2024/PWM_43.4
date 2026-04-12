import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  {
    path: 'player-campaign-main',
    loadComponent: () =>
      import('./pages/player-campaign-main/player-campaign-main').then((m) => m.PlayerCampaignMain),
  },
  { path: '**', redirectTo: 'home' },
];
