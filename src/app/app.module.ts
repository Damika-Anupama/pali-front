import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './view/home/home.component';

// $.widget.bridge('uibutton', $.ui.button);
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import 'admin-lte/dist/js/adminlte.js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {SearchTabComponent} from './view/search-tab/search-tab.component';
import {WelcomeComponent} from './view/welcome/welcome.component';
import {SignInComponent} from './view/sign-in/sign-in.component';
import {SignUpComponent} from './view/sign-up/sign-up.component';
import {NotFoundComponent} from './view/not-found/not-found.component';
import {HomeRoutingModule} from './view/home/home-routing.module';
import {HomeModule} from './view/home/home.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';

import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {environment} from '../environments/environment';
import {httpInterceptorProvider} from '@src/app/service/interceptors/interceptor-barrel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchTabComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    HomeModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatRadioModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgbModule,
    MatProgressBarModule,
    MatMenuModule
  ],
  providers: [
    httpInterceptorProvider,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: {color: 'accent'},
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.googleClientId
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
