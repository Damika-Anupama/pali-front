import {NgModule} from '@angular/core';
import {HomeRoutingModule} from '@src/app/view/home/home-routing.module';
import {DashboardComponent} from '@src/app/view/home/dashboard/dashboard.component';
import {ProfileComponent} from '@src/app/view/home/profile/profile.component';
import {SettingsComponent} from '@src/app/view/home/settings/settings.component';
import {LaunchComponent} from '@src/app/view/home/launch/launch.component';
import {FormsModule} from '@angular/forms';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import {CommonModule} from '@angular/common';
import {AdsComponent} from '@src/app/view/home/ads/ads.component';
import {ReportComponent} from '@src/app/view/home/report/report.component';
import {SuggestionsComponent} from '@src/app/view/home/suggestions/suggestions.component';
import {ChatterBoxComponent} from '@src/app/view/home/chatter-box/chatter-box.component';
import {ComradesComponent} from '@src/app/view/home/comrades/comrades.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ShopComponent} from '@src/app/view/home/shop/shop.component';
import {CommunityComponent} from '@src/app/view/home/community/community.component';
import {NgProgressModule} from 'ngx-progressbar';
import {NgProgressHttpModule} from 'ngx-progressbar/http';
import {environment} from '@src/environments/environment';
import {CommunityModule} from '@src/app/view/home/community/community.module';
import {CommunityRoutingModule} from '@src/app/view/home/community/community-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* material modules imports */
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PagesComponent } from './pages/pages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { MoreInfoComponent } from './more-info/more-info.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    LaunchComponent,
    AdsComponent,
    ReportComponent,
    SuggestionsComponent,
    ChatterBoxComponent,
    ComradesComponent,
    ShopComponent,
    CommunityComponent,
    PagesComponent,
    ContactUsComponent,
    DonateComponent,
    MoreInfoComponent
  ],exports: [
    // MatSlideToggleModule,
  ],
  imports: [
    // MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    HomeRoutingModule,
    FormsModule,
    MatSnackBarModule,
    PickerModule,
    CommonModule,
    NgbCarouselModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    CommunityModule,
    CommunityRoutingModule,
    MatDialogModule,
    // BrowserAnimationsModule,
    NgProgressModule.withConfig({
      color: 'red'
    }),
    NgProgressHttpModule.withConfig({
      silentApis: [environment.baseUrl + `/**`]
    }),
  ],
  providers: []
})
export class HomeModule {
}
