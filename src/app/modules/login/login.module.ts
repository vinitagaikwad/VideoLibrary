import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationGuard } from './authentication.guard';
import { JwtInterceptor } from './jwt.interceptor';
import { fakeBackendProvider } from './backend';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AlertService, UserService,AuthenticationService } from './services/index';
import { VideolistComponent } from '../videos/components/videolist/videolist.component';
import { DetailsComponent } from '../videos/components/details/details.component';

const appRoutes: Routes = [
 { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    LoginComponent, 
    RegistrationComponent,
    HomeComponent
  ],
  exports:[LoginComponent,RegistrationComponent, HomeComponent ],
  providers:[
    AuthenticationGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    fakeBackendProvider
  ]
})
export class LoginModule { }
