import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DestinationComponent } from './destination/destination.component';
import { AppRoutingModule } from './app.routing';
import { DestiDetailComponent } from './destination/desti-detail/desti-detail.component';
import { DestiListComponent } from './destination/desti-list/desti-list.component';
import { DestinationService } from './destination/destination.service';
import { DestiItemComponent } from './destination/desti-list/desti-item/desti-item.component';
import { DestiStartComponent } from './destination/desti-Start/desti-Start.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      DestinationComponent,
      DestiDetailComponent,
      DestiListComponent,
      DestiItemComponent,
      DestiStartComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [DestinationService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
