import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule, Response } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { VideoModule } from './modules/videos/videos.module'
import { LoginModule } from './modules/login/login.module';

import { AuthenticationGuard } from './modules/login/authentication.guard';
import { AlertComponent } from './modules/login/components/alert/alert.component';
import { HomeComponent } from './modules/login/components/home/home.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { RegistrationComponent } from './modules/login/components/registration/registration.component';
import { VideolistComponent } from './modules/videos/components/videolist/videolist.component';
import { DetailsComponent } from './modules/videos/components/details/details.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'video-list', component: VideolistComponent, canActivate: [AuthenticationGuard] },
  { path:'details/:videoId/:title/:description', component:DetailsComponent , canActivate: [AuthenticationGuard]},
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    VideoModule,
    FormsModule
  ],
  exports:[RouterModule, AlertComponent],
  providers: [
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
