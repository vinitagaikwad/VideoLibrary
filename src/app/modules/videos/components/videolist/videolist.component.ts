import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { VideoService } from '../../services/videos.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html'
})
export class VideolistComponent implements OnInit {
  data : any = {};
  myData;
  videoId : string;
  constructor(private http:Http, private videoService:VideoService) { 
  }

  ngOnInit() {
    //get the details
    this.videoService.getData().subscribe(data=> {
      this.myData = data;
    })
  }


}
