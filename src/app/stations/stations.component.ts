import { Component, OnInit, ViewChild } from '@angular/core';
import { AudioService } from '../audio.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faCoffee,faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css'] // Corrected from styleUrl to styleUrls
})
export class StationsComponent implements OnInit {

  telegram = faMessage
  
  stations: any[] = []
  radio: any;
  cover: any;
  play= "assets/play.png"
  pause = "assets/pause.png"
  isPlaying: boolean = false;
  @ViewChild('audio') audio: any;

  constructor(private stationsAPI: AudioService,
    private router:Router
  ) {}

  ngOnInit(): void {
    {
      this.stationsAPI.getAudioStreamUrl().subscribe(res => {
        this.stations = res;
        localStorage.setItem('currentRadio', JSON.stringify(res));

      });
    }
    this.togglePlayPause()
  }

  playRadio(radio:any){
    this.cover = radio.coverurl
    this.radio = radio.url
    this.togglePlayPause()
    // localStorage.setItem('currentRadio', JSON.stringify(radio));
    //this.router.navigate(["/player"],{skipLocationChange :false, queryParams:{radio:radio}})
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audio.nativeElement.pause();
    } else {
      this.audio.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }


}
