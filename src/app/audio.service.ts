import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from './Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private apiUrl = environment.radioAPI;
  constructor(private http: HttpClient) { }

  getAudioStreamUrl(): Observable<any> {
    return this.http.get(this.apiUrl + '/get/dutch').pipe(map(
      res => {
        return res || {}
      }
    ));
  }
  
}


