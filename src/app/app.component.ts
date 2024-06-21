import { Component, OnInit } from '@angular/core';
import { AudioService } from './audio.service';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'D_Stereo_FM';
  
  streamUrl: string | null = null;
  selectedOption: any=[]
  items: any[] = [];
    
  
    constructor(private audioService: AudioService,
      public dialog: MatDialog,
    ) { }
  
    ngOnInit(): void {
      this.audioService.getAudioStreamUrl().subscribe(url => {
        this.items = url;
      console.log(this.items)
      });
    }

    openDialog(item:any): void {
      const dialogRef = this.dialog.open(AudioPlayerComponent, {
        width: '700px',
        data: item, // pass any data if needed
      });

      console.log(item)
  
  
    }
  }
