import { Component, OnInit, Input } from '@angular/core'
import { Destination } from '../destination.model';
import { DestinationService } from '../destination.service';
import { ActivatedRoute, Router, Params } from '@angular/router';





@Component({
  selector: 'app-desti-detail',
  templateUrl: './desti-detail.component.html',
  styleUrls: ['./desti-detail.component.css']
})
export class DestiDetailComponent implements OnInit {
  desti:Destination;
  id:number;
  
  constructor(private destinationService:DestinationService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id=+params['id'];
        this.desti=this.destinationService.getDestis(this.id);
      }
    )
  }

}
