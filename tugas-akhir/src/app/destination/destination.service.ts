import { Injectable,EventEmitter } from '@angular/core';
import { Destination } from './destination.model';
import { Subject } from 'rxjs';
@Injectable()
export class DestinationService {
  DestiChanged = new Subject<Destination[]>();
  DestiSelected = new EventEmitter<Destination>();

constructor() { }

desti:Destination[]=[
  new Destination('Kasembon Rafting','A fun white water rafting adventure in the village of Bayem, Kec Kasembon, Malang Regency which is fun and has Booms from a height of 1-3 meters and rapids - extreme rapids when the rafting begins. and is the best rafting in Malang and in East Java',
    'https://i.ytimg.com/vi/yf7OMr0W0_E/maxresdefault.jpg'),
    new Destination('Singhasari temple','Singhasari temple or Candi Singhasari is a 13th-century syncretic Hindu-Buddhist temple located in Singosari district, Malang Regency, East Java in Indonesia.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Candi_Singosari_B.JPG/300px-Candi_Singosari_B.JPG'),
  
    new Destination('Malang Night Paradise','Malang Night Paradise is a family entertainment place in Malang with a glowing or sparkling theme that is unique in Malang, East Java. Malang Night Paradise offers 2 amusement parks in one location. This place also presents several replicas of Dinousaurus that triumphed in his era'
    ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1R92Fd04_5mnWSlh87Yl5xyxWQwKd3H2sgUQXuPKewseYBQEBg')

];

getDesti(){
  return this.desti.slice();
}
getDestis(id:number){
  return this.desti[id];
}
}
