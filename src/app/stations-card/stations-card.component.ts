import { Component, Input, OnInit, input } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-stations-card',
  templateUrl: './stations-card.component.html',
  styleUrl: './stations-card.component.css'
})
export class StationsCardComponent implements OnInit {

  @Input() public coverImage:string | undefined;
  @Input() public name:string | undefined;
  @Input() public count:string | undefined;
  

  constructor(private stationsAPI:AudioService){}

  ngOnInit(){

  //   console.log("malenge")

  //   {
  //     this.stationsAPI.getAudioStreamUrl().subscribe(res => {
  //       this.stations = res;
  //       console.log(res)
  //     });
  //   }
  }

}
