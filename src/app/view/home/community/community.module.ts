import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {CommunityRoutingModule} from '@src/app/view/home/community/community-routing.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuComponent} from '@src/app/view/home/community/menu/menu.component';
import {PageComponent} from '@src/app/view/home/community/page/page.component';
import {BuildComponent} from '@src/app/view/home/community/build/build.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MenuComponent,
    PageComponent,
    BuildComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatSliderModule,
    NgbCarouselModule,
    CommunityRoutingModule,
    FormsModule
  ]
})
export class CommunityModule { }
