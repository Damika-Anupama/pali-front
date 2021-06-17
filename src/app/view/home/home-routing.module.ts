import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home.component';
import {LaunchComponent} from './launch/launch.component';
import {GangsComponent} from './gangs/gangs.component';
import {AdsComponent} from './ads/ads.component';
import {ReportComponent} from './report/report.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {ChatterBoxComponent} from './chatter-box/chatter-box.component';
import {PagesComponent} from '@src/app/view/home/pages/pages.component';
import {ComradesComponent} from "@src/app/view/home/comrades/comrades.component";

const heroRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'd', pathMatch: 'prefix'},
      {component: DashboardComponent, path: 'd'},
      {component: ProfileComponent, path: 'prof'},
      {component: SettingsComponent, path: 'settings'},
      {component: LaunchComponent, path: 'launch'},
      {component: GangsComponent, path: 'gangs'},
      {component: AdsComponent, path: 'ads'},
      {component: ReportComponent, path: 'report'},
      {component: SuggestionsComponent, path: 'suggestions'},
      {component: ChatterBoxComponent, path: 'chatter-box'},
      {component: PagesComponent, path: 'pages'},
      {component: ComradesComponent, path: 'comrades'},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
