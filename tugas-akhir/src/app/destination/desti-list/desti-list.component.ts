import { Component, OnInit, OnDestroy } from '@angular/core';
import { Destination } from '../destination.model';
import { Subscription } from 'rxjs';
import { DestinationService } from '../destination.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desti-list',
  templateUrl: './desti-list.component.html',
  styleUrls: ['./desti-list.component.css']
})
export class DestiListComponent implements OnInit, OnDestroy {

  desti:Destination[];
  subs:Subscription;

  constructor( private destiService:DestinationService, 
    private router:Router,
    private route:ActivatedRoute){}
   

  ngOnInit() {
    this.subs = this.destiService.DestiChanged
    .subscribe(
      (desti:Destination[]) => {
        this.desti = desti;
      }
    );
    this.desti = this.destiService.getDesti();
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
