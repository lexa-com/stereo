import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { AudioService } from '../audio.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements AfterViewInit {
  streamUrl: string | null = null;
  volume = 50; // Initial volume level
  audioProgress = 0;
  selectedoption:any 
  @ViewChild('audioElement', { static: true }) audioElement?: ElementRef<HTMLAudioElement>;
  station: any;
  play= "assets/play.png"
  pause = "assets/pause.png"
  isPlaying: boolean = false;
  @ViewChild('audio') audio: any;
  title: any;
  clicks: any;
  stations: any[]=[];

  constructor(
   

    private cdr: ChangeDetectorRef,
    private router:Router,
    private stationsAPI: AudioService
  ) {
    this.station = this.router.getCurrentNavigation()?.extras?.queryParams?.['radio'] ?? 'defaultRadioUrl';

  }

  // ngOnInit(): void {
  //   this.selectedoption = this.Data.coverurl
  //   this.streamUrl = this.Data.url;
  //   console.log(`Stream URL: ${this.streamUrl}`);
  //   this.cdr.detectChanges();
  
  // }

  ngAfterViewInit(): void {
    this.selectedoption = this.station.coverurl;
    this.streamUrl = this.station.url;
    this.title = this.station.name
    this.clicks = this.station.count
    console.log(`Stream URL: ${this.streamUrl,this.selectedoption}`);
    this.cdr.detectChanges();
    this.getStations()
    this.togglePlayPause()
    
  }


  togglePlayPause() {
    if (this.isPlaying) {
      this.audio.nativeElement.pause();
    } else {
      this.audio.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  getas(){
    this.stationsAPI.getD().subscribe(res=>{
      console.log(res)
    })
  }

  getStations(){
    {
      this.stationsAPI.getAudioStreamUrl().subscribe(res => {
        this.stations = res;
      });
    }
  }
}
