import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../../destination.model';

@Component({
  selector: 'app-desti-item',
  templateUrl: './desti-item.component.html',
  styleUrls: ['./desti-item.component.css']
})
export class DestiItemComponent implements OnInit {
  @Input() destis:Destination;
  @Input() index:number;
  constructor() { }

  ngOnInit() {
  }

}
