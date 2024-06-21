import { Component, Inject, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.css'
})
export class AudioPlayerComponent implements OnInit {
  streamUrl: string | null = null;
  selectedoption:any = null;
  
  constructor(private audioService: AudioService,
    public dialogRef: MatDialogRef<AudioPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public Data: any) { }
  
  

  ngOnInit(): void {

    this.selectedoption = this.Data.coverurl;
    this.streamUrl = this.Data.url;
    console.log(`${this.selectedoption} streams`)
    
  }
}
