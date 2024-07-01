import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AudioService } from './audio.service';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'D_Stereo_FM';
  
  streamUrl: string | null = null;
  selectedOption: any[] = [];
  items: any[] = [];
  isDialogOpen: boolean = false;
  dialogRef?: MatDialogRef<AudioPlayerComponent>;

  constructor(private audioService: AudioService, public dialog: MatDialog) {}

  ngOnInit(): void {
   
  }


  sideBarOpen = true;


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
