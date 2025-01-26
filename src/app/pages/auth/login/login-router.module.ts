import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
// import { permissionGuard } from '@app/shared/guards/permission.guard.spec/permission.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculoRatingManualRoutingModule {}
