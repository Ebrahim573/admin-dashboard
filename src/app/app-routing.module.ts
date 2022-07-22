import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AssociateComponent } from './modules/associate/associate.component';
import { BookingComponent } from './modules/booking/booking.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DefaultComponent,
  children:[{path:'', component:DashboardComponent}, {path:'associates',component:AssociateComponent},{path:'booking',component:BookingComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
