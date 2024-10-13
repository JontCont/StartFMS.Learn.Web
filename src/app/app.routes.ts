import { routes as appRoutes } from './app.routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./Home/Home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'learn',
    children: [
      {
        path: 'jp',
        loadComponent: () =>
          import(
            './Learn/JP/individual-character/individual-character.component'
          ).then((m) => m.IndividualCharacterComponent),
      },
      {
        path: 'eng',
        loadComponent: () =>
          import(
            './Learn/ENG/individual-character/individual-character.component'
          ).then((m) => m.IndividualCharacterComponent),
      },
    ],
  },
];
