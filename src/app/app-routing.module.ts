import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDashboardComponent } from './components/admin/booking-dashboard/booking-dashboard.component';
import { UsersDashboardComponent } from './components/admin/users-dashboard/users-dashboard.component';
import { FieldDashboardComponent } from './components/admin/field-dashboard/field-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'booking-admin',
    component: BookingDashboardComponent, canActivate: [AuthGuard]
  }
  ,
  {
    path: 'users-admin',
    component: UsersDashboardComponent, canActivate: [AuthGuard]
  }
  ,
  {
    path: 'fields-admin',
    component: FieldDashboardComponent, canActivate: [AuthGuard]
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
