import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceAppointmentComponent } from './place-appointment11/place-appointment.component';


const routes: Routes = [
  {path:'',component:ViewAppointmentComponent,pathMatch:'full'},
  {path:'placeapp',component:PlaceAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
