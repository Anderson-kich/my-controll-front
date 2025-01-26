import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/auth/login/login.module').then((m) => m.LoginModule),
  },
];
