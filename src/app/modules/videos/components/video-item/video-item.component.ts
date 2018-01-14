import { Component, OnInit, Input} from '@angular/core';
import { VideoService } from '../../services/videos.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html'
})
export class VideoItemComponent implements OnInit {
  @Input() item: any;
  vidTitle : string;
  vidDesc : any;
  vidDate : any;
  constructor(private appService:VideoService) { }

  ngOnInit() {
  }

    
  
}
