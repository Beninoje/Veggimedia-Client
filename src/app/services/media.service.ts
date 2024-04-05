import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  serverURL: string = environment.serverURL

  constructor(private http: HttpClient) { }

  //GET
  getMedia(){
    return this.http.get(`${this.serverURL}/media`);
  }

  //POST
  addMedia(media:any){
    return this.http.get(`${this.serverURL}/media`,media);
  }
}
