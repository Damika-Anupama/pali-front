import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {LaunchComponent} from './launch/launch.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import {CommonModule} from '@angular/common';
import {GangsComponent} from './gangs/gangs.component';
import {AdsComponent} from './ads/ads.component';
import {ReportComponent} from './report/report.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {ChatterBoxComponent} from './chatter-box/chatter-box.component';
import {PagesComponent} from "@src/app/view/home/pages/pages.component";
import {ComradesComponent} from "@src/app/view/home/comrades/comrades.component";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {ShopComponent} from "@src/app/view/home/shop/shop.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    LaunchComponent,
    GangsComponent,
    AdsComponent,
    ReportComponent,
    SuggestionsComponent,
    ChatterBoxComponent,
    PagesComponent,
    ComradesComponent,
    ShopComponent

  ],
  imports: [
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
    MatOptionModule
  ],
  providers: []
})
export class HomeModule {
}
