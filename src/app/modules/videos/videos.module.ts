import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { VideolistComponent } from './components/videolist/videolist.component';
import { DetailsComponent } from './components/details/details.component';
import { VideoService } from './services/videos.service';
import { VideoItemComponent } from './components/video-item/video-item.component';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    YoutubePlayerModule
  ],
  declarations: [
    VideolistComponent,
    DetailsComponent,
    VideoItemComponent
  ],
  exports:[VideolistComponent, DetailsComponent],
  providers:[
    VideoService
  ]
})
export class VideoModule { }
