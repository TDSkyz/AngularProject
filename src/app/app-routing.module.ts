import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDashboardComponent } from './components/admin/booking-dashboard/booking-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'booking-admin',
    pathMatch: 'full'
  },
  {
    path: 'booking-admin',
    component: BookingDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
