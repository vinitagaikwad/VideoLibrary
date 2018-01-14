import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {
  private apiURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw&pretty=true";
  constructor(private http:Http) { }
  titleserv : string;
  getData() {
    return this.http.get(this.apiURL)
    .map((res:Response)=> res.json())
  }
  
}
