import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';

// import { permissionGuard } from '@app/shared/guards/permission.guard.spec/permission.guard';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    // canActivate: [permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordComponentRoutingModule {}
