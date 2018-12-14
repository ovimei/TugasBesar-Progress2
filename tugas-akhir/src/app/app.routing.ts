import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { DestiDetailComponent } from './destination/desti-detail/desti-detail.component';
import { NgModule } from '@angular/core';
import { DestiListComponent } from './destination/desti-list/desti-list.component';
import { DestiStartComponent } from './destination/desti-Start/desti-Start.component';

const AppRoutes: Routes = [
  { path: '', redirectTo:'/destination' ,pathMatch:'full'},
  {path: 'destination', component:DestinationComponent,children:
  [
    {path:'',component:DestiStartComponent},
    {path:':id',component:DestiDetailComponent}

  ]

},
];


@NgModule({
  imports: [ RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}