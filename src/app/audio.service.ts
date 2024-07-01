import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from './Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  API_URL = `https://europe-west1.gcp.data.mongodb-api.com/app/application-0-alaar/endpoint/get/dutch`;

  private apiUrl = environment.radioAPI;
  constructor(private http: HttpClient) { }

  getAudioStreamUrl(): Observable<any> {
    return this.http.get(this.apiUrl + '/get/dutch',{ headers: this.headers, withCredentials: false }).pipe(map(
      res => {
        return res || {}
      }
    ));
  }

  getD():Observable<any>{

    return this.http.get<any>(this.API_URL).pipe(
      map((res) => {
        console.log(res)
        return res || {};
      }),

    );
  }
  
}


