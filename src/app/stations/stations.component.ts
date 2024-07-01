import { Component, OnInit, ViewChild } from '@angular/core';
import { AudioService } from '../audio.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faCoffee,faMessage,faHeart,faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css'] // Corrected from styleUrl to styleUrls
})
export class StationsComponent implements OnInit {

  telegram = faMessage
  home = faHome
  favourites = faHeart
  
  stations: any[] = []
  radio: any;
  cover: any;
  play= "assets/play.png"
  pause = "assets/pause.png"
  isPlaying: boolean = false;
  @ViewChild('audio') audio: any;
  stationss: any;
  radiosArray:any[]=[]

  constructor(private stationsAPI: AudioService,
    private router:Router
  ) {}

  ngOnInit(): void {    
    this.getStations()
    this.togglePlayPause()
    this.getFavourites()
  }

  playRadio(radio: any) {
    this.cover = radio.coverurl;
    this.radio = radio.url;
    this.togglePlayPause();
  
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    const idsArray = favourites.map((fav: { _id: any; }) => fav._id);
    console.log(radio._id)
    console.log(idsArray)
    
    if (idsArray.includes(radio._id)){
      console.log("already exists")
      
    }
    else{favourites.push(radio);}

    
    
    localStorage.setItem('favourites', JSON.stringify(favourites));
  
  }
  

  getStations(){
    this.stationsAPI.getAudioStreamUrl().subscribe(res => {
      this.stations = res;
     //localStorage.setItem('currentRadio', JSON.stringify(res));

    })
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audio.nativeElement.pause();
    } else {
      this.audio.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  getFavourites(){
    const storedStations = localStorage.getItem('favourites');
    if (storedStations) {
      this.stations = JSON.parse(storedStations);
    }
  }


}
