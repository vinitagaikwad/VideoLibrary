import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/videos.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id : string;
  private player;
  private ytEvent;
  myData;
  title : string;
  description : string;
  subscription: Subscription;
  nameTitle: string;
  constructor(private videoService : VideoService, private route : ActivatedRoute) { 
    this.id = route.snapshot.params['videoId'];
    this.title = route.snapshot.params['title'];
    this.description = route.snapshot.params['description']
  }

  ngOnInit() {
    //get video details
    this.videoService.getData().subscribe(data=> { this.myData = data
      console.log(data);
    })

  }
  
  // play options
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

}
