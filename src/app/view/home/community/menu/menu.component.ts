import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import { searchCommunityContentComponent } from './searchCommunityDialogBox/searchCommunityContent.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  images = [62, 83, 466, 965, 982, 1043].map((n) => `assets/img/${n}-900x500.jpg`);
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  // @ts-ignore
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  step = 0;

  constructor(private router: Router,public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  togglePaused(): void {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  gotopage(): any {
    this.router.navigateByUrl('/home/com/page/ff')
  }
  onSlide(slideEvent: NgbSlideEvent): void {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  routToBuildPage(): void {
    this.router.navigateByUrl('/home/com/build');
  }

  openDialog() {
    const dialogRef = this.dialog.open(searchCommunityContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
